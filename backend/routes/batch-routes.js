import express from "express";
import {
  addBatch,getBatch
} from "../controllers/batch-controller.js";

const batchRouter = express.Router();

batchRouter.get("/",getBatch);
batchRouter.post("/add", addBatch);

export default batchRouter;
