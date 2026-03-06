--Japanese Cities' Name
SELECT NAME FROM CITY WHERE COUNTRYCODE = 'JPN';

--Weather Observation Station 2
SELECT ROUND(SUM(LAT_N), 2), ROUND(SUM(LONG_W), 2) FROM STATION;
--Weather Observation Station 9
SELECT DISTINCT CITY FROM STATION WHERE CITY NOT REGEXP '^[aeiouAEIOU]';
--Weather Observation Station 10
SELECT DISTINCT CITY FROM STATION WHERE CITY NOT REGEXP '[aeiouAEIOU]$';
----Weather Observation Station 12
SELECT DISTINCT CITY FROM STATION 
WHERE CITY NOT REGEXP '^[aeiouAEIOU]'
 AND CITY NOT REGEXP '[aeiouAEIOU]$';

--Average Population
SELECT FLOOR(AVG(POPULATION)) FROM CITY;
--The Company
SELECT c.company_code, c.founder,
       COUNT(DISTINCT lm.lead_manager_code),
       COUNT(DISTINCT sm.senior_manager_code),
       COUNT(DISTINCT m.manager_code),
       COUNT(DISTINCT e.employee_code)
FROM Company c
LEFT JOIN Lead_Manager lm ON c.company_code = lm.company_code
LEFT JOIN Senior_Manager sm ON lm.lead_manager_code = sm.lead_manager_code
LEFT JOIN Manager m ON sm.senior_manager_code = m.senior_manager_code
LEFT JOIN Employee e ON m.manager_code = e.manager_code
GROUP BY c.company_code, c.founder
ORDER BY c.company_code;

--Harry Potter and Wands
SELECT w.id, wp.age, w.coins_needed, w.power
FROM Wands w
JOIN Wands_Property wp ON w.code = wp.code
WHERE wp.is_evil = 0 AND w.coins_needed = (
    SELECT MIN(w2.coins_needed)
    FROM Wands w2
    JOIN Wands_Property wp2 ON w2.code = wp2.code
    WHERE wp.age = wp2.age AND w.power = w2.power
)
ORDER BY w.power DESC, wp.age DESC;
--The Report
SELECT IF(g.Grade >= 8, s.Name, NULL), g.Grade, s.Marks
FROM Students s
JOIN Grades g ON s.Marks BETWEEN g.Min_Mark AND g.Max_Mark
ORDER BY g.Grade DESC, s.Name ASC, s.Marks ASC;

--Symmetric Pairs
SELECT f1.X, f1.Y
FROM Functions f1
WHERE EXISTS (
    SELECT * FROM Functions f2
    WHERE f2.Y = f1.X AND f2.X = f1.Y AND f2.X > f1.X
)
UNION
SELECT X, Y FROM Functions
WHERE X = Y
GROUP BY X, Y
HAVING COUNT(*) > 1
ORDER BY X;