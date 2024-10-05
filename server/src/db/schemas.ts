import { boolean, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const students = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
});

export const courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  name: varchar("name"),
  creditHours: varchar("credit_hours"),
});

export const coursePrerequisite = pgTable("course_prerequisite", {
  id: serial("id").primaryKey(),
  courseId: serial("course_id").references(() => courses.id),
  prerequisiteCourse: serial("prerequisite_course").references(() => courses.id),
});
export const semesters = pgTable("semesters", {
  id: serial("id").primaryKey(),
  year: varchar("year"),
  term: varchar("term"),
});

export const courseOfferings = pgTable("course_offerings", {
  id: serial("id").primaryKey(),
  courseId: serial("course_id").references(() => courses.id),
  semesterId: serial("semester_id").references(() => semesters.id),
});

export const enrollments = pgTable("student_courses", {
  enrollmentId: serial("enrollment_id").primaryKey(),
  studentId: serial("student_id").references(() => students.id),
  courseId: serial("course_id").references(() => courses.id),
  completed: boolean("completed"),
  passed: boolean("passed"),
  semesterTaken: serial("semwester_taken").references(() => semesters.id),
});
