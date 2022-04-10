import { Router } from "express";
import hotelModel from "../models/hotel.js";

const hotel = Router();

hotel.get("/", async (req, res) => {
  const result = await hotelModel.findAll();
  res.json(result);
});
hotel.get("/:id", async (req, res) => {
  const result = await hotelModel.findById(req.params.id);
  res.json(result);
});
hotel.post("/", async (req, res) => {
  const result = await hotelModel.create(req.body);
  res.json(result);
});
hotel.put("/:id", async (req, res) => {
  const result = await hotelModel.findByIdAndUpdate(req.params.id, req.body);
  res.json(result);
});
hotel.delete("/:id", async (req, res) => {
  const result = await hotelModel.findBYIdAndDelete(req.params.id);
  res.json(result);
});

export default hotel;
