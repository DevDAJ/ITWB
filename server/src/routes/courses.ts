import { coursePrerequisite, courses } from "@api/db/schemas";
import { eq } from "drizzle-orm";
import type { FastifyInstance } from "fastify";

export const courseRoutes = (fastify: FastifyInstance, _: unknown, done: () => void) => {
  fastify.get("/", async (request, response) => {
    const result = await request.db
      .select({
        id: courses.id,
      })
      .from(courses)
      .leftJoin(coursePrerequisite, eq(courses.id, coursePrerequisite.courseId));

    response.code(200).send(result);
  });
  fastify.post("/prerequisite", async (request, response) => {
    const { courseId, prerequisiteCourse } = request.body as {
      courseId: number;
      prerequisiteCourse: number;
    };
    console.log(courseId, prerequisiteCourse);
    await request.db
      .insert(coursePrerequisite)
      .values({
        courseId,
        prerequisiteCourse,
      })
      .execute()
      .then(() => response.code(201).send())
      .catch((error) => response.code(400).send(error))
      .finally(() => response.code(204).send());
  });
  done();
};
