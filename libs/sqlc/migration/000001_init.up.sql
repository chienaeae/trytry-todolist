CREATE TABLE "users" (
    "id" bigserial PRIMARY KEY,
    "username" varchar NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "todos" (
    "id" bigserial PRIMARY KEY,
    "text" varchar NOT NULL,
    "done" boolean NOT NULL DEFAULT false,
    "created_at" timestamptz NOT NULL DEFAULT (now()),
    "owner_id" bigint NOT NULL
);

CREATE INDEX ON "users" ("username");
CREATE INDEX ON "todos" ("owner_id");

ALTER TABLE "todos"
ADD FOREIGN KEY ("owner_id") REFERENCES "users" ("id");
