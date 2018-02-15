select *
from reviews
join user on reviews.user_id = user.user_id;