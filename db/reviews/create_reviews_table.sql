Create table if not exists reviews (
    review_id serial primary key,
    user_id smallint references users(user_id),
    user_review text,
    img text,
    user_stars smallint,
    is_approved boolean default false
);