update donuts
set donut_name = $1, donut_desc = $2, donut_img = $3, donut_price = $4;
where donut_id = $5;