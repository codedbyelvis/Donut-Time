select *
from reviews
join users on reviews.user_id = users.user_id;