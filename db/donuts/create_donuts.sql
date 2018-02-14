insert into donuts
(donut_name, donut_desc, donut_img, donut_price)
values
($1, $2, $3, $4)
returning *;