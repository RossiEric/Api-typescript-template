//import "source-map-support/register";
import serverlessExpress from "@vendia/serverless-express";
import app from "./app";
import dotenv from "dotenv";

console.info("NODE_ENV : " + process.env.NODE_ENV);

dotenv.config({
  path: ".env",
});

export const handler = serverlessExpress({ app });
