insert into users
(user_name, user_img, is_admin, auth_id)
values
-- REMEBER YOU HARDCODED TRUE
($1, $2, TRUE, $3)
returning *;