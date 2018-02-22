select *
from cart
join donuts on donuts.donut_id = cart.donut_id
where user_id = $1;