import { students } from "@api/db/schemas";
import type { FastifyInstance } from "fastify";

export const studentRoutes = (fastify: FastifyInstance, _: unknown, done: () => void) => {
  fastify.get("/", async (request, response) => {
    const result = await request.db.select().from(students);

    response.code(200).send(result);
  });
  done();
};
