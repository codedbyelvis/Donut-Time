update cart
set donut_id = $1, donut_amount = $2;
where user_id = $1;