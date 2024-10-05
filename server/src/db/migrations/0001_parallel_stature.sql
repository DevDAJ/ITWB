ALTER TABLE "course_prerequisite" ADD COLUMN "prerequisite_course" serial NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "course_prerequisite" ADD CONSTRAINT "course_prerequisite_prerequisite_course_courses_id_fk" FOREIGN KEY ("prerequisite_course") REFERENCES "courses"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
