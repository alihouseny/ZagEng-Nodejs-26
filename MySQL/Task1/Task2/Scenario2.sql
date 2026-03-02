-- Active: 1772107779560@@127.0.0.1@3306@hospital_db



CREATE TABLE doctors (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100) NOT NULL,
 specialization VARCHAR(100),
 hire_date DATE,
 salary DECIMAL(10,2),
 consultations_count INT

);
 DROP TABLE doctors;

CREATE TABLE patients (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100) NOT NULL,
 age INT,
 gender VARCHAR(10),
 admission_date DATE,
 room_type VARCHAR(50),
 bill_amount DECIMAL(10,2),
 status VARCHAR(50)
);


SELECT *FROM doctors

INSERT INTO doctors (name, specialization, hire_date, salary, consultations_count) VALUES
('Ali Housseny','Cardiology','2022-05-10',92000.00,380),
('Adly Negm','Neurology','2021-11-15',85000.00,450),
('Ali Elhadad','Cardiology','2023-03-22',78000.00,220),
('Omar Ali','Orthopedics','2024-01-08',88000.00,180),
('Muhammed Ali','General Surgery','2022-09-30',76000.00,340),
('Abdo Nasser','Pediatrics','2020-07-12',68000.00,520),
('Iten Hussein','Cardiology','2023-06-18',81000.00,260);


INSERT INTO patients (name, age, gender, admission_date, room_type, bill_amount, status) VALUES
('Fatma Ibrahim', 45, 'Female', '2025-10-01', 'ICU', 12450.00, 'Admitted'),
('Youssef Ramadan', 62, 'Male', '2025-09-15', 'Private', 8750.50, 'Admitted'),
('Aisha Kamal', 34, 'Female', '2025-11-20', 'General', 3200.75, 'Admitted'),
('Mostafa Adel', 71, 'Male', '2025-08-10', 'ICU', 19800.00, 'Admitted'),
('Hana Sherif', 29, 'Female', '2025-12-05', 'Private', 6400.00, 'Admitted'),
('Karim Osama', 53, 'Male', '2025-07-22', 'General', 2800.00, 'Discharged'),
('Rehab Salah', 38, 'Female', '2025-11-10', 'ICU', 9500.00, 'Admitted'),
('Amr Hussein', 19, 'Male', '2025-12-01', 'General', 1800.50, 'Admitted');


--scenario_2 
--task_1
SELECT name, specialization, salary
FROM doctors
WHERE hire_date > '2022-01-01'
ORDER BY salary DESC
LIMIT 5;

---------

--task_2
SELECT room_type,
 COUNT(*) AS patient_count,
 MAX(bill_amount) AS max_bill,
 MIN(bill_amount) AS min_bill,
 SUM(bill_amount) AS total_revenue
FROM patients
GROUP BY room_type
HAVING total_revenue > 5000;

--task_3
-->1
SELECT name, LENGTH(name) AS name_length
FROM patients;
-->2
SELECT specialization, LOWER(specialization) AS lowercase_specialization
FROM doctors;
-->3
SELECT name, DATEDIFF(CURDATE(), admission_date) AS days_in_hospital
FROM patients;
----------

--TASK_4
-->1
ALTER TABLE doctors
ADD email VARCHAR(255);
-->2
UPDATE doctors
SET salary = salary * 1.10
WHERE specialization = 'Cardiology';

-->3
DELETE FROM patients
WHERE status = 'discharged';
-->4
ALTER TABLE patients
MODIFY bill_amount DECIMAL(10,2);
---------------



/*SELECT name, specialization, salary, hire_date
FROM doctors
WHERE hire_date > '2022-01-01'
ORDER BY salary DESC
LIMIT 5;




SELECT 
 name,
 LENGTH(name) AS name_length,
 CHAR_LENGTH(name) AS char_length 
FROM patients
ORDER BY name_length DESC
LIMIT 8;

SELECT 
 specialization,
 LOWER(specialization) AS lowercase_spec
FROM doctors;


SELECT 
 name,
 admission_date,
 CURDATE()AS today,
 DATEDIFF(CURDATE(), admission_date) AS days_in_hospital
FROM patients
WHERE status = 'Admitted'  
ORDER BY days_in_hospital DESC;

*/