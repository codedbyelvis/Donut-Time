insert into cart
(user_id, donut_id, donut_amount)
values
($1, $2, $3)
returning *;