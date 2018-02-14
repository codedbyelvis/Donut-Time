Create table if not exists purchased (
    id serial primary key,
    orders_id smallint references orders(id)
);