import axios from "axios";
import { generateWhereClause, mapToDbShipObject } from "../utils/shipsUtil.js";
import dbPool from "../db.js";

export const getShipsFromApi = async () => {
  return (await axios.get("https://api.spacexdata.com/v3/ships")).data;
};

export const getShipService = async (weight, port) => {
  const WHERE_CLAUSE = generateWhereClause(weight, port);

  const rows = await dbPool.query(`SELECT * FROM ship ${WHERE_CLAUSE}`);

  // if no data found in database, fetch data from api
  if (rows && rows.length === 0) {
    const apiResult = await getShipsFromApi();
    updateShipsDataInDb(apiResult);
  }

  const rowsData = await dbPool.query(`SELECT * FROM ship ${WHERE_CLAUSE}`);
  return rowsData;
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

const updateShipsDataInDb = async (shipsData) => {
  // schedule("59 23 * * *", async () => {
  const apiResult = await getShipsFromApi();
  shipsData.map(async (shipData) => {
    const shipDbObject = mapToDbShipObject(shipData);
    await addShipService(shipDbObject);
  });
  // });
};
