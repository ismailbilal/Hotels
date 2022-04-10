import { Router } from "express";
import hotelModel from "../models/hotel.js";

const hotel = Router();

hotel.get("/:type", async (req, res) => {
  const result = await hotelModel.findAll(req.params.type);
  res.json(result);
});
hotel.get("/:type/:id", async (req, res) => {
  const result = await hotelModel.findById(req.params.type, req.params.id);
  res.json(result);
});
hotel.post("/node/:type", async (req, res) => {
  const result = await hotelModel.create(req.params.type, req.body);
  res.json(result);
});
hotel.post(
  "/relationship/:type/:srcName/:srcId/:desName/:desId",
  async (req, res) => {
    const result = await hotelModel.createRelationship(
      req.params.type,
      req.params.srcName,
      req.params.srcId,
      req.params.desName,
      req.params.desId
    );
    res.json(result);
  }
);
hotel.put("/:type/:id", async (req, res) => {
  const result = await hotelModel.findByIdAndUpdate(
    req.params.type,
    req.params.id,
    req.body
  );
  res.json(result);
});
hotel.delete("/:type/:id", async (req, res) => {
  const result = await hotelModel.findBYIdAndDelete(
    req.params.type,
    req.params.id
  );
  res.json(result);
});

export default hotel;
