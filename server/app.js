import express from "express";
import bodyParser from "body-parser";
import { getShipService, updateShipWithImage } from "./service/shipService.js";
import { validateUploadShipRequest } from "./utils/validateRequest.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// list all ships
app.get("/listShips", async (req, res) => {
  const shipsData = await getShipService(
    req.query.weight,
    req.query.port,
    req.query.pageSize
  );
  res.status(200).json(shipsData);
});

// get a single ship based on weight and home port
app.get("/getShip", async (req, res) => {
  const shipsData = await getShipService(req.query.weight, req.query.port);
  res.status(200).json(shipsData);
});

// upload a ship data with image
app.post("/ship", validateUploadShipRequest, async (req, res) => {
  const { result } = await updateShipWithImage(req.body);
  res.status(200).json({
    result,
  });
});

app.listen("4000");
console.log(
  `Listening on port: 4000, wait for the development server to be up...`
);
