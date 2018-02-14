insert into users
(user_name, user_img, is_admin, auth_id)
values
($1, $2, $3, $4)
returning *;