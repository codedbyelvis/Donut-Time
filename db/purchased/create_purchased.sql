insert into purchased
(orders_id)
values
($1)
returning *;