--
-- SQL edited by https://hasura-edit-pg-dump.now.sh
--

CREATE TABLE public.board (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL
);

CREATE TABLE public.list (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    board_id uuid NOT NULL,
    "position" integer NOT NULL
);

ALTER TABLE ONLY public.board
    ADD CONSTRAINT board_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.list
    ADD CONSTRAINT list_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.list
    ADD CONSTRAINT list_position_key UNIQUE ("position");

ALTER TABLE ONLY public.list
    ADD CONSTRAINT list_board_id_fkey FOREIGN KEY (board_id) REFERENCES public.board(id) ON UPDATE RESTRICT ON DELETE RESTRICT;

