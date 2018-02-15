Create table if not exists custom_content (
    custom_content_id serial primary key,
    store_hours text,
    welcome_msg text,
    carousel_img text
);