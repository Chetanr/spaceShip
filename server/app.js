import express from "express";
import bodyParser from "body-parser";
import { getShipsService } from "./service/shipService.js";
import { validateRequestBody } from "./utils/validateRequest.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// list all ships
app.get("/listShips", async (req, res) => {
  const pageSize = req.query.pageSize ?? 20;
  const shipsData = await getShipsService(pageSize);
  res.status(200).json({
    result: shipsData,
  });
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
