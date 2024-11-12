import dotenv from "dotenv";

export default function () {
  dotenv.config();

  return {
    service: {
      port: process.env.SERVICE_PORT || 3000,
    },
  };
}
