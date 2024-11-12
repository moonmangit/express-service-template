import dotenv from "dotenv";

export interface EnvConfig {
  service: {
    port: number;
  };
}

export default function (): EnvConfig {
  dotenv.config();

  return {
    service: {
      port: parseInt(process.env.SERVICE_PORT as string) || 3000,
    },
  };
}
