Create table if not exists purchased (
    purchased_id serial primary key,
    user_id smallint references user(user_id)
    orders_id smallint references orders(orders_id)
    donut_id smallint references donuts(donut_id)
    donut_amount smallint references cart(donut_amount)
);