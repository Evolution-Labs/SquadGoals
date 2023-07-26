CREATE TABLE public.squad (
  "_id" serial PRIMARY KEY NOT NULL,
  "name" varchar NOT NULL,
  "description" varchar NOT NULL,
  "squad_key" varchar NOT NULL,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE public.user (
	"_id" serial PRIMARY KEY,
	"first_name" varchar NOT NULL,
    "last_name" varchar NOT NULL,
	"email" varchar  NOT NULL UNIQUE,
	"password" varchar  NOT NULL,
  "squad_id" serial NOT NULL REFERENCES public.squad("_id"),
    "created_at" timestamp NOT NULL,
    "updated_at" timestamp,
    "deleted_at" timestamp
);

CREATE TABLE public.task (
  "_id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "points" int NOT NULL,
  "squad_id" serial NOT NULL REFERENCES public.squad("_id"),
  "daily_challenge" boolean NOT NULL DEFAULT false,
  "created_at" timestamp NOT NULL,
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE public.completed_tasks (
    "_id" serial PRIMARY KEY,
    "squad_id" serial NOT NULL REFERENCES public.squad("_id"),
    "task_id" serial NOT NULL REFERENCES public.task("_id"),
    "user_id" serial NOT NULL REFERENCES public.user("_id"),
    "created_at" timestamp NOT NULL,
    "updated_at" timestamp,
    "deleted_at" timestamp
)

-- INSERT INTO public.squad (name, description, squad_key, created_at) VALUES ('Cohort 58', 'A big ole barrel of bakas', 'sussybaka' ,now());

-- insert Cohort 58 SQUAD into the SQL tables
-- append functionality to userController.createUser middleware to add every new user to Cohort 58 SQUAD

-- psql -d postgres://sbriubrv:aIs4KnZbZN2OEorES0P__OhbstItGngq@mahmud.db.elephantsql.com/sbriubrv -f squadGoalsSchema.sql

-- UPDATE CREATEUSER, GET USER QUERIES

