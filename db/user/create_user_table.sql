Create table if not exists users (
    id serial primary key,
    user_name text,
    user_img text,
    is_admin boolean default false,
    auth_id text
);