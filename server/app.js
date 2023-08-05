import express from "express";
import bodyParser from "body-parser";
// import * as dbpool from "./db.js";
import { getShipsService } from "./service/shipService.js";
import { validateRequestBody } from "./utils/validateRequest.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// list all ships
app.get("/listShips", async (req, res) => {
  const pageSize = req.query.pageSize ?? 20;
  const shipsData = await getShipsService(pageSize);
  console.log("shipsData:", shipsData);
  res.status(200).json(shipsData);
});

// upload a ship data
app.post("/ship", validateRequestBody, async (req, res) => {
  const result = await addShipService(req.body);
  res.status(200).json({
    result,
  });
});

app.listen("4000");
console.log(
  `Listening on port: 4000, wait for the development server to be up...`
);
