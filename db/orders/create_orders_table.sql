Create table if not exists orders (
    orders_id serial primary key,
    user_id smallint references user(user_id),
    order_time current_timestamp()
);