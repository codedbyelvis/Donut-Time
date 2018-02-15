Create table if not exists cart (
    cart_id serial primary key,
    user_id smallint references user(user_id),
    donut_id smallint references donut(donut_id),
    donut_amount smallint
);