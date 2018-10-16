DROP DATABASE IF EXISTS students_DB;
CREATE database students_DB;

USE students_DB;

CREATE TABLE address (
  student_id VARCHAR(5) NOT NULL,
  address VARCHAR(100),
  city VARCHAR(50),
  county VARCHAR(50),
  state VARCHAR(50),
  zip INT,
  PRIMARY KEY (student_id)
);

CREATE TABLE name (
  student_id VARCHAR(5) NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  DOB DATE,
  PRIMARY KEY (student_id)
);


LOAD DATA LOCAL INFILE '/Users/michelb/Desktop/bootcamp-2/wwtv_interview/address.csv'
INTO TABLE address
FIELDS TERMINATED BY ','
LINES TERMINATED BY '/n'
IGNORE 1 LINES;

LOAD DATA LOCAL INFILE '/Users/michelb/Desktop/bootcamp-2/wwtv_interview/student.txt'
INTO TABLE name
FIELDS TERMINATED BY '/t'
LINES TERMINATED BY '/n'
IGNORE 1 LINES;