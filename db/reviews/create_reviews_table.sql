Create table if not exists reviews (
    id serial primary key,
    user_id smallint references user(id),
    user_review text,
    img text,
    -- find how to do starts
    is_approved boolean default false
);