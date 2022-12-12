import express from "express";
import mongoose from "mongoose";
import batchRouter from "./routes/batch-routes";
import router from "./routes/user-routes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", router);
app.use("/api/batch/", batchRouter);

  mongoose.connect
  (
      'mongodb+srv://rajatsharma9:5PGJQAPCWisfxf1g@cluster0.w8otkb4.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(()=> app.listen(8000))
  .then(() =>
      console.log("Connected database, listening on port 5000")
  )
  .catch((err) =>console.log(err));
;
