CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."cards"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "description" varchar, "list_id" uuid NOT NULL, "board_id" uuid NOT NULL, "position" numeric NOT NULL, "title" varchar NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_cards_updated_at"
BEFORE UPDATE ON "public"."cards"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_cards_updated_at" ON "public"."cards" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
