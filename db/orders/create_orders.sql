insert into orders
(user_id, order_time)
values
($1, $2)
returning *;