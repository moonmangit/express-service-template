import dotenv from "dotenv";

export default function () {
  dotenv.config();

  return {
    service: {
      port: process.env.PORT || 3000,
    },
  };
}
