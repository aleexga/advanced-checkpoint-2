import next from "next";
import path from "path";
import express from "express";
import TestRouter from "./routers/TestRouter";
import mongoose from "mongoose";

const dev = process.env.NODE_ENV !== "production";

// mongoose installation
mongoose.connect("mongodb://localhost/aca-checkpoint-2");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("mongo connected successfully!")
});

// next.js installation
const nextApp = next({
  dev,
  dir: path.resolve(__dirname)
});
const handle = nextApp.getRequestHandler();

const PORT = 3001;

nextApp.prepare().then(() => {
  const app = express();

  // Define all you backend handlers here...
  app.use(TestRouter);
  // Handle everything that is not covered in above routes with next.js
  app.get('*', (request, response) => {
    return handle(request, response);
  });

  app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log("Server listening on port " + PORT);
  });
});
