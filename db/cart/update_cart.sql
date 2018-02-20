update cart
set donut_id = $2, donut_amount = $3;
where user_id = $1;