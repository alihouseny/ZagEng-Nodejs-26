-- Active: 1772107779560@@127.0.0.1@3306@hospital_management

CREATE DATABASE hospital_management;
USE hospital_management;

CREATE TABLE Departments (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL,
    head_doctor_id INT DEFAULT NULL 
);

CREATE TABLE Doctors (
    doctor_id INT AUTO_INCREMENT PRIMARY KEY,
    doctor_name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100) NOT NULL,
    dept_id INT NOT NULL,
    FOREIGN KEY (dept_id) REFERENCES Departments(dept_id) ON DELETE CASCADE
);

CREATE TABLE Patients (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    phone_number VARCHAR(20) DEFAULT NULL
);


CREATE TABLE Appointments (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    doctor_id INT NOT NULL,
    patient_id INT NOT NULL,
    appointment_date DATE NOT NULL,
    diagnosis TEXT DEFAULT NULL,
    fee DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id) ON DELETE CASCADE,
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id) ON DELETE CASCADE
);


INSERT INTO Departments (dept_name) VALUES
('Cardiology'),
('Neurology'),   
('Pediatrics');    

INSERT INTO Doctors (doctor_name, specialization, dept_id) VALUES
('Dr. Ahmed Hassan', 'Heart Specialist', 1), 
('Dr. Fatima Ali', 'Brain Surgeon', 2),      
('Dr. Omar Khaled', 'Child Doctor', 3);    

INSERT INTO Patients (patient_name, date_of_birth, phone_number) VALUES
('Patient A', '1990-01-01', '0123456789'),
('Patient B', '1985-05-15', NULL),
('Patient C', '2000-10-20', '0112233445');


INSERT INTO Appointments (doctor_id, patient_id, appointment_date, diagnosis, fee) VALUES
(1, 1, '2025-03-10', 'High Blood Pressure', 150.00), 
(1, 2, '2025-03-12', 'Heart Checkup', 200.00),         
(2, 3, '2025-03-15', 'Migraine', 180.00),       
(3, 1, '2025-03-20', 'Fever', 100.00);  


SELECT d.dept_name, doc.doctor_name AS head_doctor
FROM Departments d
LEFT JOIN Doctors doc ON d.head_doctor_id = doc.doctor_id;

SELECT d.doctor_id, d.doctor_name, COALESCE(SUM(a.fee), 0) AS total_revenue
FROM Doctors d
LEFT JOIN Appointments a ON d.doctor_id = a.doctor_id
GROUP BY d.doctor_id, d.doctor_name;

SELECT AVG(a.fee) AS average_fee
FROM Appointments a
INNER JOIN Doctors d ON a.doctor_id = d.doctor_id
INNER JOIN Departments dep ON d.dept_id = dep.dept_id
WHERE dep.dept_name = 'Cardiology';
