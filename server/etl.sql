COPY Cart FROM '/home/avarice/hackreactor/SDC-PO/appdata/cart.csv' (DELIMITER ',', HEADER, FORMAT CSV);
COPY Product FROM '/home/avarice/hackreactor/SDC-PO/appdata/product.csv' (DELIMITER ',', HEADER, FORMAT CSV);
COPY Features FROM '/home/avarice/hackreactor/SDC-PO/appdata/features.csv' (DELIMITER ',', HEADER, FORMAT CSV);
COPY Styles FROM '/home/avarice/hackreactor/SDC-PO/appdata/styles.csv' (DELIMITER ',', HEADER, FORMAT CSV);
COPY Skus FROM '/home/avarice/hackreactor/SDC-PO/appdata/skus.csv' (DELIMITER ',', HEADER, FORMAT CSV);
COPY RelatedProducts FROM '/home/avarice/hackreactor/SDC-PO/appdata/related.csv' (DELIMITER ',', HEADER, FORMAT CSV);
COPY Photos FROM '/home/avarice/hackreactor/SDC-PO/appdata/photos.csv' (DELIMITER ',', HEADER, FORMAT CSV);
