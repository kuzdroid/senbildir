import express from "express";
import dotenv from "dotenv";
import pkg from "pg";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const { Pool } = pkg;

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* 🔥 ROOT HTML */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/* API ÖRNEK */
app.post("/api/report",(req,res)=>{
  res.json({message:"OK"});
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log("Server çalışıyor");
});
