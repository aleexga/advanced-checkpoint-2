import express from "express";

const router = express.Router();
// @FIXME: Remove disabling of rules
/* eslint-disable no-unused-vars*/

// Lists all events
router.get("/api/events", (request, response, next) => {
  console.log("List view is working");
  return response.json("it works!");
});
// Returns one event
router.get("/api/events/:id", (request, response, next) => {
  console.log("Detail view is working");
  return response.json("it works!");
});
// Deletes one event
router.delete("/api/events/:id", (request, response, next) => {
  console.log("Delete view is working");
  return response.json("it works!");
});
// Creates one event
router.post("/api/events", (request, response, next) => {
  console.log("Post view is working");
  return response.json("it works!");
});
// Updates one event
router.put("/api/events/:id", (request, response, next) => {
  console.log("Put view is working");
  return response.json("it works!");
});


export default router;
