import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    companyName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    interest: { type: String },
    message: { type: String },
    acceptedTerms: { type: Boolean, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
