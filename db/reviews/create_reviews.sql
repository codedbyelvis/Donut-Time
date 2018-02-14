insert into reviews
(user_id, user_review, img, is_approved)
values
($1, $2, $3, $4)
returning *;