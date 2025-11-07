import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
// import path from 'path';
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Task Manager API is running...');
});
// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});