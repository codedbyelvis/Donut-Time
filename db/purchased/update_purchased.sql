update purchased
set donut_id = $1, donut_amount = $2;
where purchased_id = $1;