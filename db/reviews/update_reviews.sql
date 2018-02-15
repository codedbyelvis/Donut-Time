update reviews
set user_review = $1, user_img = $2, user_stars = $3, is_approved = $4;
where user_id = $1;