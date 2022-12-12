import mongoose from "mongoose";

const Schema = mongoose.Schema;

const batchSchema = new Schema({
  batchNumber: {
    type: String,
    required: true,
  },
  timing: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Batch",batchSchema);
