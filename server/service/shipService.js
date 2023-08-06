import axios from "axios";
import { generateWhereClause, mapToDbShipObject } from "../utils/shipsUtil.js";
import dbPool from "../db.js";

export const getShipsFromApi = async () => {
  return (await axios.get("https://api.spacexdata.com/v3/ships")).data;
};

export const getShipService = async (weight, port, pageSize) => {
  const WHERE_CLAUSE = generateWhereClause(weight, port);
  const pageLimit = pageSize ?? 20;

  try {
    const rows = await dbPool.query(
      `SELECT * FROM ship ${WHERE_CLAUSE} LIMIT ${pageLimit}`
    );
    // if no data found in database, fetch data from api
    if (rows && rows.length === 0) {
      const apiResult = await getShipsFromApi();
      updateShipsDataInDb(apiResult);
    }

    return await dbPool.query(
      `SELECT * FROM ship ${WHERE_CLAUSE} LIMIT ${pageLimit}`
    );
  } catch (e) {
    console.error(e);
  }
};

export const addShipService = async (shipDetails) => {
  try {
    const result = await dbPool.query(
      `INSERT INTO ship (name, type, port, weight, class) VALUES (?,?,?,?,?);`,
      [
        shipDetails.name,
        shipDetails.type,
        shipDetails.port,
        shipDetails.weight,
        shipDetails.class,
      ]
    );

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const updateShipWithImage = async (shipDetails) => {
  try {
    const result = await dbPool.query(
      `UPDATE ship SET image= ${shipDetails.image} WHERE name=${shipDetails.name}`
    );
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const updateShipsDataInDb = async (shipsData) => {
  shipsData.map(async (shipData) => {
    const shipDbObject = mapToDbShipObject(shipData);
    await addShipService(shipDbObject);
  });
};
