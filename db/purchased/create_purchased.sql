insert into purchased
(user_id, orders_id, donut_id, donut_amount)
values
($1, $2, $3, $4)
returning *;