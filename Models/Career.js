import mongoose from "mongoose";

const careerSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    position: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

const Career = mongoose.model("Career", careerSchema);
export default Career;
