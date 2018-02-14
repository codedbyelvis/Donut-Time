Create table if not exists order (
    id serial primary key,
    user_id smallint references user(id),
    order_time current_timestamp()
);