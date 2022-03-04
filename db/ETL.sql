\c product_information;

COPY product_information(id, name, slogan, description, category, default_price) FROM '/Users/granchez77/Desktop/CSV_Data/product.csv' DELIMITER ',' CSV HEADER;

COPY product_styles(id, style_id, name, sale_price, original_price, default_) FROM '/Users/granchez77/Desktop/CSV_Data/styles.csv' DELIMITER ',' CSV HEADER NULL AS 'null';

COPY features(id, product_id, feature, value) FROM '/Users/granchez77/Desktop/CSV_Data/features.csv' DELIMITER ',' CSV HEADER;

COPY skus(id, style_id, size, quantity) FROM '/Users/granchez77/Desktop/CSV_Data/skus.csv' DELIMITER ',' CSV HEADER;

COPY photos(id, style_id, url, thumbnail_url) FROM '/Users/granchez77/Desktop/CSV_Data/photos.csv' DELIMITER ',' CSV HEADER;

-- //find a sql statement that will drop entries from tables that dont have the foreign key constraint
-- //move foreign key constraints to separate file. get data in first, then write sql queries to make sure data conforms to constraints, then implement constraints. KEEP PRIMARY KEY BUT NOT AS A CONSTRAINT. IMPORT THE DATA THEN GO BACK AND ASSIGN THE FOREIGN KEYS AFTER DATA IS INSERTED