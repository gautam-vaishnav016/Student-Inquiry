import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import Inquiry from "./models/Inquiry.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PW,
  },
});

app.post("/api/inquiry", async (req, res) => {
  try {
    const { name, email, course } = req.body;

    await Inquiry.create({
      name,
      email,
      course,
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Inquiry Received",
      text: `Hello ${name}, your inquiry for ${course} has been received successfully.`,
    });

    res.status(200).json({
      message: "Inquiry submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});