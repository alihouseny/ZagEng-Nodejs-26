
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    class VARCHAR(20) NOT NULL,
    city VARCHAR(50) NOT NULL,
    grade INT CHECK (grade >= 0 AND grade <= 100),
    gender CHAR(1) DEFAULT 'M',
    register_date DATE
);

INSERT INTO students (name, age, class, city, grade, gender, register_date) VALUES
('Ahmed Ali',20,'1A','Cairo',88,'M','2023-09-01'),
('Sara Hassan',21,'2B','Giza',92,'F','2023-09-03'),
('Omar Samir',19,'1A','Cairo',75,'M','2023-09-05'),
('Mona Adel',22,'3C','Alex',81,'F','2023-09-07'),
('Youssef Khaled',23,'2B','Giza',90,'M', '2023-09-10');





SELECT * FROM students;

SELECT name, grade FROM students;


SELECT * FROM students WHERE age > 20;


SELECT * FROM students WHERE class = '1A';


SELECT * FROM students WHERE grade > 85;

UPDATE students SET grade = 85 WHERE name = 'Omar Samir';

SELECT * FROM students WHERE city = 'Cairo';


CREATE TABLE courses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    instructor VARCHAR(100) NOT NULL,
    hours INT CHECK (hours >= 10),
    price  DECIMAL(10,2) CHECK (price > 0),
    level VARCHAR(20) DEFAULT 'Beginner',
    start_date DATE
);

INSERT INTO courses (course_name, instructor, hours, price, level, start_date) VALUES
('Database Basics','Ahmed Tarek',30,1200.00,'Beginner','2024-02-01'),
('Web Development','Sara Ali',45,2000.00,'Intermediate','2024-03-10'),
('Algorithms','Mona Samir',40,1800.00,'Advanced','2024-04-05'),
('Networking','Omar Khaled',35,1500.00,'Beginner','2024-05-01');

SELECT * FROM courses;

SELECT course_name, instructor FROM courses;


SELECT * FROM courses WHERE price > 1500;

SELECT * FROM courses WHERE level = 'Beginner';

SELECT * FROM courses 
WHERE hours BETWEEN 30 AND 40;


UPDATE courses 
SET price = 1950 
WHERE course_name = 'Algorithms';


SELECT * FROM courses 
WHERE instructor LIKE '%a%';








CREATE TABLE books(
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_name VARCHAR(150) NOT NULL,
    author VARCHAR(100) NOT NULL,
    pages INT CHECK(pages >= 50),
    category VARCHAR(50) DEFAULT 'General',
    price DECIMAL(10,2) CHECK (price > 0),
    publish_date DATE
);


INSERT INTO books (book_name, author, pages, category, price, publish_date) VALUES
('Clean Code','Robert Martin',450,'Programming',500.00,'2008-08-01'),
('Atomic Habits','James Clear',320,'Self Development',350.00,'2018-10-16'),
('Deep Work','Cal Newport',300,'Productivity',300.00,'2016-01-05'),
('Design Patterns','GoF',395,'Programming',600.00,'1994-10-21');


SELECT * FROM books;


SELECT book_name, author FROM books;

SELECT * FROM books WHERE price < 400;


SELECT * FROM books WHERE category = 'Programming';


SELECT * FROM books 
WHERE pages BETWEEN 300 AND 500;


UPDATE books 
SET price = 320 
WHERE book_name = 'Deep Work';


SELECT * FROM books 
WHERE book_name LIKE '%o%';