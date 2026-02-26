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

