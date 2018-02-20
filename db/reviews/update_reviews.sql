update reviews
set user_review = $2, user_img = $3, user_stars = $4, is_approved = $5;
where user_id = $1;