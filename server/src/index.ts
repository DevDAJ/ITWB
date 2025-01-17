import { initDb } from "@api/db";
import { courseRoutes, studentRoutes } from "@api/routes";
import { env, Logger } from "@api/utils";
import fastify from "fastify";
import { middleware } from "./modules/middleware";

// eslint-disable-next-line @typescript-eslint/naming-convention
const API_VERSION = "v1";

export const main = async () => {
  const server = fastify({
    bodyLimit: 1_000_000,
    trustProxy: true,
  });

  await initDb();

  server.register(middleware);
  server.register(import("@fastify/cors"), {
    maxAge: 600,
    origin: true,
    credentials: true,
  });

  // Routes
  server.register(studentRoutes, {
    prefix: `/${API_VERSION}/students`,
  });
  server.register(courseRoutes, {
    prefix: `/${API_VERSION}/courses`,
  });

  server.listen({ host: env.HOST, port: env.PORT }, (error, address) => {
    if (error) {
      Logger.error("INIT", error.message);
      throw new Error(error.message);
    }

    Logger.info("INIT", `Server listening at ${address}`);
  });

  return server;
};

main();
