import express from "express";
import http from "http";
import api from "./routes/index.js";
import config from "./config/index.js";
import passport from "passport";
import cors from 'cors';



const app = express();
const server = http.createServer(app);
app.use(
  cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type","Authorization"],
  })
);
app.use(passport.initialize());
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/", api);


server.listen(config.serverPort, () => {
  console.log(`Server is running on port ${config.serverPort}`);
});
