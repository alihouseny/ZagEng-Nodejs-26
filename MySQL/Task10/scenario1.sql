CREATE DATABASE e_commerce_store;
USE e_commerce_store;

CREATE TABLE Products (
 product_id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100) NOT NULL,
 category VARCHAR(100),
 stock_quantity INT NOT NULL CHECK (stock_quantity >= 0)
);

CREATE TABLE Orders (
 order_id INT AUTO_INCREMENT PRIMARY KEY,
 order_date DATE NOT NULL,
 status VARCHAR(50) DEFAULT 'Pending'
);

CREATE TABLE Order_Items(
 order_id INT,
 product_id INT,
 quantity INT NOT NULL CHECK (quantity > 0),
 unit_price DECIMAL(10,2) NOT NULL,
 PRIMARY KEY (order_id, product_id),
 FOREIGN KEY (order_id) REFERENCES Orders(order_id),
 FOREIGN KEY (product_id) REFERENCES Products(product_id)
);

ALTER TABLE Products
ADD COLUMN discount DECIMAL(5,2) DEFAULT 0.00;

INSERT INTO Products (name, category, stock_quantity, discount) VALUES
('iPhone 15', 'Electronics', 50, 5.00),
('Samsung Galaxy S24', 'Electronics', 30, 0.00),
('Wireless Headphones', 'Accessories', 100, 10.00),
('Laptop Dell', 'Computers', 15, 0.00),
('Smart Watch', 'Wearables', 80, 15.00);

INSERT INTO Orders (order_date, status) VALUES
('2025-03-01', 'Shipped'),
('2025-03-05', 'Pending');

INSERT INTO Order_Items (order_id, product_id, quantity, unit_price) VALUES
(1, 1, 1, 899.99),
(1, 3, 2, 49.99),
(2, 2, 1, 799.99), 
(2, 5, 1, 249.99);

SELECT 
 o.order_id,
 SUM(oi.quantity * oi.unit_price) AS total_revenue
FROM Orders o
INNER JOIN Order_Items oi ON o.order_id = oi.order_id
GROUP BY o.order_id;