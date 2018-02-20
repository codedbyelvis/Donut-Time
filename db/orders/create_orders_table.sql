Create table if not exists orders (
    orders_id serial primary key,
    user_id smallint references users(user_id),
    order_time timestamp
);