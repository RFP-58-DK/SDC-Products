DROP DATABASE IF EXISTS product_information;

CREATE DATABASE product_information;

\c product_information;


CREATE TABLE product_information (
 id BIGSERIAL PRIMARY KEY,
 name VARCHAR(245),
 slogan VARCHAR,
 description VARCHAR,
 category VARCHAR,
 default_price INTEGER
);

CREATE TABLE product_styles (
 id BIGSERIAL PRIMARY KEY,
 product_id INTEGER,
 name VARCHAR,
 sale_price INTEGER,
 original_price INTEGER,
 default_ INTEGER
);

CREATE TABLE features (
 id BIGSERIAL PRIMARY KEY,
 product_id INTEGER,
 feature VARCHAR,
 value VARCHAR
);

CREATE TABLE photos (
 id BIGSERIAL PRIMARY KEY,
 style_id INTEGER,
 url VARCHAR,
 thumbnail_url VARCHAR
);

CREATE TABLE skus (
 id BIGSERIAL PRIMARY KEY,
 style_id INTEGER,
 size VARCHAR,
 quantity INTEGER
);

ALTER TABLE product_styles ADD CONSTRAINT product_styles_style_id_fkey FOREIGN KEY (product_id) REFERENCES product_information(id);
ALTER TABLE features ADD CONSTRAINT features_id_fkey FOREIGN KEY (product_id) REFERENCES product_information(id);
ALTER TABLE photos ADD CONSTRAINT photos_style_id_fkey FOREIGN KEY (style_id) REFERENCES product_styles(id);
ALTER TABLE skus ADD CONSTRAINT skus_style_id_fkey FOREIGN KEY (style_id) REFERENCES product_styles(id);

CREATE INDEX features_product_id_idx ON features (product_id);
CREATE INDEX product_information_id_idx ON product_information (id);
CREATE INDEX photos_styles_id_idx ON photos (style_id);
CREATE INDEX skus_style_id_idx ON skus (style_id);
CREATE INDEX product_styles_product_id_idx ON product_styles (product_id);