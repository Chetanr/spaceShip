import axios from "axios";
// import nodecron from "node-cron";
import dbPool from "../db.js";

export const getShips = async () => {
  return (await axios.get("https://api.spacexdata.com/v3/ships")).data;
};

const updateShips = () => {};

export const getShipsService = async (pageSize) => {
  const rows = await dbPool.query(`SELECT * FROM ship LIMIT ${pageSize}`);

  // if no data found in database, fetch data from api
  if (rows && rows.length === 0) {
    const apiResult = await getShips();
    return apiResult;
  }

  return rows;
};

export const addShipService = async (shipDetails) => {
  const result = await dbPool.query(
    `INSERT INTO ship (name, type, home_port, weight_in_kg, class) VALUES (${req.body.name}, ${req.body.type}, ${req.body.port}, ${req.body.weight}, ${req.body.class})`
  );

  return result;
};
