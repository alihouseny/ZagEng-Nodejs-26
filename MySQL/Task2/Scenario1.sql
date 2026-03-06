-- Active: 1772107779560@@127.0.0.1@3306@store_db
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL DEFAULT 0,
    date_added DATE NOT NULL,
    INDEX idx_category (category)
);

--task_1 
INSERT INTO products (name, category, price, stock_quantity, date_added) VALUES
('PS5','Electronics',20000.99,12,'2026-03-2'),
('Laptop RTX 4090','Electronics',45999.00,5,'2026-03-01'),
('Wireless Noise-Cancelling Headphones','Electronics',8499.50,18,'2024-11-8'),
('Iphone17','Electronics',87999.00,8,'2025-02-22'),
('tv','Electronics',79999.00,3,'2025-12-01'),
('Earbuds Pro','Electronics',5499.00,25,'2025-11-6'),
('Mechanical Gaming Keyboard','Electronics',2499.75,15,'2005-03-22'),
('External SSD 4TB','Electronics',6799.00, 40,'2005-07-05');


SELECT name, price
FROM products
WHERE category = 'Electronics'
ORDER BY price DESC
LIMIT 3;

---------------------

---task_2

INSERT INTO products (name, category, price, stock_quantity, date_added) VALUES
('Phone Case','Accessories',399.00,120,'2024-10-01'),
('Screen Protector','Accessories',199.00,200,'2026-01-10'),
('Wireless Charger','Accessories',899.00,45,'2023-08-15'),
('USB-C','Accessories',149.00,300,'2021-11-20'),
('Laptop Backpack 17-inch','Accessories',1299.00,22,'2022-02-18'),
('Bluetooth Mouse','Accessories',599.00,80,'2005-06-30'),
('HDMI Cable 4K','Accessories',249.00,150,'2005-12-05');

INSERT INTO products (name, category, price, stock_quantity, date_added) VALUES
('MUG','Home',399.00,120,'2026-10-13'),
('OVAN','Home',199.00,200,'2026-01-14'),
('BATHROOM','Home',899.00,45,'2025-04-15'),
('BOILER','Home',149.00,300,'2024-3-20'),
('DISHS','Home',1299.00,22,'2025-01-18'),
('CANABES','Home',599.00,80,'2005-09-30'),
('BEDROOM','Home',249.00,150,'2005-12-20');



SELECT category,
       COUNT(*) AS count,
       AVG(price) AS avg_price,
       SUM(price * stock_quantity) AS total_value
FROM products
GROUP BY category
HAVING count > 5;
------------------------


--TASK_3
SELECT UPPER(name) AS uppercase_name,
       LEFT(name, 10) AS short_desc,
       DATEDIFF(NOW(), date_added) AS days_since_added
FROM products;



------------

--task_4
--1
ALTER TABLE products
ADD discount_rate DECIMAL(5,2);

--2
UPDATE products
SET discount_rate = 0.10
WHERE category = 'Accessories';


--3
INSERT INTO products (name, category, price, stock_quantity, date_added) VALUES
('Old Wired Mouse','Accessories',120.00,0,'2022-03-14'),
('Broken Charger','Electronics',450.00,0,'2021-09-01'),
('Damaged Phone Case','Accessories',80.00,0,'2023-05-22');

DELETE FROM products
WHERE stock_quantity = 0;

--4
DROP TABLE IF EXISTS old_inventory;


------
SELECT * from products;

