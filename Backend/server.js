import dotenv from "dotenv";
dotenv.config(); // MUST be first

import app from "./src/app.js";
import connectDB from "./src/config/db.js";

await connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server running");
});