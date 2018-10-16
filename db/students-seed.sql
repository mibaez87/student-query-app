INSERT INTO address(student_id, address, city, county, state, zip)
VALUES ("F1201","6649 N Blue Gum St", "New Orleans", "Orleans", "LA", 70116);

INSERT INTO address(student_id, address, city, county, state, zip)
VALUES ("F1202", "4 B Blue Ridge Blvd", "Brighton", "Livingston", "MI", 48116);

INSERT INTO address(student_id, address, city, county, state, zip)
VALUES ("F1203", "8 W Cerritos Ave #54", "Bridgeport", "Gloucester", "NJ", 8014);

INSERT INTO name(student_id, first_name, last_name, DOB)
VALUES ("F1201", "James", "Butt", "2000-01-02");

INSERT INTO name(student_id, first_name, last_name, DOB)
VALUES ("F1202", "Josephine", "Darakjy", "1999-04-03");

INSERT INTO name(student_id, first_name, last_name, DOB)
VALUES ("F1203", "Art", "Venere", "1998-12-07");


USE students_db;

SELECT name.student_id, first_name, last_name, DOB, address, city, county, state, zip
FROM name
INNER JOIN address ON name.student_id = address.student_id;