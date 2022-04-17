import express from "express";
import hotel from "./src/routes/hotel.js";
import location from "./src/routes/location.js";
import { config } from "dotenv";
import locality from "./src/routes/locality.js";
import city from "./src/routes/city.js";
import user from "./src/routes/user.js";

config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", hotel);
app.use("/", location);
app.use("/", locality);
app.use("/", city);
app.use("/", user);
app.listen(process.env.PORT);
console.log("server started at http://localhost%d", process.env.PORT);
