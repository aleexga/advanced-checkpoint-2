import express from "express";
import TestController from "../controllers/TestController";

const router = express.Router();

// Lists all events
router.get("/api/events", TestController.list);
// Returns one event
router.get("/api/events/:id", TestController.show);
// Deletes one event
router.delete("/api/events/:id", TestController.delete);
// Creates one event
router.post("/api/events", TestController.create);
// Updates one event
router.put("/api/events/:id", TestController.update);

export default router;
