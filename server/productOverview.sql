CREATE TABLE IF NOT EXISTS Product (
  id SERIAL,
  name VARCHAR(500),
  slogan VARCHAR(500),
  description VARCHAR(500),
  category VARCHAR(500),
  default_price INT,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS Features (
  id SERIAL,
  product_id INT,
  feature VARCHAR(500),
  value VARCHAR(500),
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS Styles (
  id SERIAL,
  product_id INT,
  name VARCHAR(500),
  sale_price VARCHAR(500),
  original_price VARCHAR(500),
  default_style BOOLEAN,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS Skus (
  id SERIAL,
  style_id INT,
  size VARCHAR,
  quantity INT,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS Photos (
  id SERIAL,
  style_id INT,
  url VARCHAR,
  thumbnail_url VARCHAR,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS RelatedProducts (
  id SERIAL,
  current_product_id INT,
  related_product_id INT,
  PRIMARY KEY(id)
);
