import dotenv from "dotenv";
import app from "./app";

dotenv.config({
  path: ".env",
});

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
