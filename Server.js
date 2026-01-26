import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/db.js";

import contactRoutes from "./Routes/ContactRoutes.js";
import careerRoutes from "./Routes/CareerRoutes.js";
import setupSwagger from "./Config/swagger.js"; // ✅ CORRECT import

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contacts", contactRoutes);
app.use("/api/careers", careerRoutes);

// Swagger
setupSwagger(app); // ✅ Swagger enabled

// Health check
app.get("/", (req, res) => {
  res.send("API is running successfully Abhishek Kumar Pandey");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger Docs: http://localhost:${PORT}/api-docs`);
});
