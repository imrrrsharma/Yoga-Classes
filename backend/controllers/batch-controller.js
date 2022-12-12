import mongoose from "mongoose";
import Batch from "../model/Batch.js";
import User from "../model/User.js";

export const getBatch = async(req,res) => {
  return res.status(200).json({message:"Successful"});
}
export const addBatch = async (req, res, next) => {
  const { batchNumber,user,timing } = req.body;

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (error) {
    return console.log(error);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "Unable to Find user by this Id" });
  }
  // console.log(batchNumber,user,timing);
  let batch;
  // const batchId = req.params.id;
  
 
  try {
    batch = await Batch.findByIdAndUpdate(user, {
      batchNumber,
      timing,
      user
    });
  } catch (error) {
    return console.log(error);
  }
  if (!batch) {
    batch = await Batch.create({
      batchNumber,
      timing,
      user
    });
  }
  return res.status(200).json({ batch });
};

