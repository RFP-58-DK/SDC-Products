DROP DATABASE IF EXISTS product_information;

CREATE DATABASE product_information;

\c product_information;

CREATE TABLE IF NOT EXISTS product_information (
  id SERIAL PRIMARY KEY,
  -- campus VARCHAR (250),
  name VARCHAR (250),
  slogan VARCHAR (250),
  description VARCHAR (250),
  category VARCHAR (250),
  default_price INT,
  features VARCHAR (250)
);

CREATE TABLE IF NOT EXISTS product_styles (
  style_id SERIAL PRIMARY KEY,
  id SERIAL,
  FOREIGN KEY (style_id)
    REFERENCES product_information (id),
  name VARCHAR (250),
  original_price INT,
  sale_price INT,
  default_style INT
  -- photos VARCHAR (250)
);

CREATE TABLE IF NOT EXISTS features (
  id SERIAL PRIMARY KEY,
  product_id SERIAL,
  FOREIGN KEY (product_id)
    REFERENCES product_information (id),
  -- FOREIGN KEY (id)
  --   REFERENCES product_information (id),
  feature VARCHAR (250),
  value VARCHAR (250)
);


-- CREATE TABLE IF NOT EXISTS skus (
--   id SERIAL PRIMARY KEY,
--   FOREIGN KEY (id)
--     REFERENCES product_information (id),
--   sku_id SERIAL PRIMARY KEY,
--   style_id SERIAL UNIQUE,
--   FOREIGN KEY (style_id)
--     REFERENCES product_styles (style_id)
-- );

CREATE TABLE IF NOT EXISTS skus (
  style_id SERIAL,
  id SERIAL PRIMARY KEY,
  -- FOREIGN KEY (id)
  --   REFERENCES product_information (id),
  FOREIGN KEY (style_id)
    REFERENCES product_styles (style_id),
  -- sku_id SERIAL,
  -- FOREIGN KEY (sku_id)
  --   REFERENCES skus (sku_id),
  quantity INT NOT NULL,
  size VARCHAR (250) NOT NULL
);

CREATE TABLE IF NOT EXISTS photos (
  id SERIAL,
  -- FOREIGN KEY (id)
  --   REFERENCES product_information (id),
  style_id SERIAL,
  FOREIGN KEY (style_id)
    REFERENCES product_styles (style_id),
  PRIMARY KEY (style_id),
  thumbnail_url  VARCHAR NOT NULL,
  url  VARCHAR NOT NULL
);
