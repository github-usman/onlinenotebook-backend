import { connectToMongo } from "./db.js";
import express from "express";
import authRoutes from "./routes/auth.js";
import notesRoutes from "./routes/notes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;

// MongoDB database connection
connectToMongo();

const app = express();

// middleware to parse the   object into json are follow helper

app.use(cors()); // for local hosting
app.use(express.json());

// http requestion get method root
app.get("/", (req, res) => {
  const audioFilePath = path.join(__dirname, '2264.wav');
  res.set('Content-Type', 'audio/wav');
  res.sendFile(audioFilePath);
});

app.use("/auth", authRoutes);
app.use("/notes", notesRoutes);

app.listen(dbPort, () => {
  console.log(`App listening on port ${dbHost}${dbPort}`);
});
