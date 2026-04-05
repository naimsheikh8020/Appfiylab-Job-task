import app from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

dotenv.config();
await connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server running");
});