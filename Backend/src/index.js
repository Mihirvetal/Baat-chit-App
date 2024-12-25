import express from "express"
import authRoutes from "./routes/auth.route.js"
const app = express()
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import messageRoutes from './routes/message.route.js'
app.use(express.json())




dotenv.config()
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

const PORT = process.env.PORT || 5001
app.listen(PORT , ()=>{
    console.log("server is running on 5001 port");
    connectDB()
})