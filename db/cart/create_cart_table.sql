Create table if not exists cart (
    id serial primary key,
    user_id smallint references user(id),
    donut_id smallint[] references donut(id),
    donut_amount smallint[]
);