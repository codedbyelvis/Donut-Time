Create table if not exists donuts (
    donut_id serial primary key,
    donut_name text,
    donut_desc text,
    donut_img text,
    donut_price decimal(4,2)
);