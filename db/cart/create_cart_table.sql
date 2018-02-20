Create table if not exists cart (
    cart_id serial primary key,
    user_id smallint references users(user_id),
    donut_id smallint references donuts(donut_id),
    donut_amount smallint
);