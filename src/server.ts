import dotenv from "dotenv";
import app from "./app";

dotenv.config({
  path: process.env.NODE_ENV === "Dev" ? ".env.dev" : process.env.NODE_ENV === "Prod" ? ".env.prod" : ".env",
});

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
