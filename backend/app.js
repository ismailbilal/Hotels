import express from "express";
import hotel from "./src/routes/hotel.js";
import { config } from "dotenv";

config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", hotel);
console.log(process.env.PORT);
app.listen(process.env.PORT);
