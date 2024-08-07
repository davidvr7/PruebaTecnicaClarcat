-- Crear la base de datos
CREATE DATABASE pruebatecnicaapi;

-- Usar la base de datos creada
USE pruebatecnicaapi;
  
-- Crea la tabla Departments
CREATE TABLE IF NOT EXISTS departments (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL
);

-- Crea la tabla Users
CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE, 
    PhoneNumber VARCHAR(20), 
    DepartmentId INT,
    FOREIGN KEY (DepartmentId) REFERENCES Departments(Id) ON DELETE SET NULL
);

-- Inserta 20 registros en Departments
INSERT INTO departments (Name) VALUES ('HR');
INSERT INTO departments (Name) VALUES ('IT');
INSERT INTO departments (Name) VALUES ('Finance');
INSERT INTO departments (Name) VALUES ('Marketing');
INSERT INTO departments (Name) VALUES ('Sales');
INSERT INTO departments (Name) VALUES ('Legal');
INSERT INTO departments (Name) VALUES ('Customer Support');
INSERT INTO departments (Name) VALUES ('Engineering');
INSERT INTO departments (Name) VALUES ('R&D');
INSERT INTO departments (Name) VALUES ('Product');
INSERT INTO departments (Name) VALUES ('Logistics');
INSERT INTO departments (Name) VALUES ('Administration');
INSERT INTO departments (Name) VALUES ('Operations');
INSERT INTO departments (Name) VALUES ('Business Development');
INSERT INTO departments (Name) VALUES ('Training');
INSERT INTO departments (Name) VALUES ('Quality Assurance');
INSERT INTO departments (Name) VALUES ('Strategy');
INSERT INTO departments (Name) VALUES ('Corporate Affairs');
INSERT INTO departments (Name) VALUES ('IT Support');
INSERT INTO departments (Name) VALUES ('Public Relations'); 


-- Inserta registros en Users
INSERT INTO Users (Id, FirstName, LastName, Email, PhoneNumber, DepartmentId) VALUES
    (1, 'Alice', 'Johnson', 'alice.johnson@example.com', '555-0101', 1),
    (2, 'Bob', 'Smith', 'bob.smith@example.com', '555-0102', 2),
    (3, 'Charlie', 'Brown', 'charlie.brown@example.com', '555-0103', 3),
    (4, 'David', 'Wilson', 'david.wilson@example.com', '555-0104', 4),
    (5, 'Emma', 'Davis', 'emma.davis@example.com', '555-0105', 5),
    (6, 'Frank', 'Miller', 'frank.miller@example.com', '555-0106', 6),
    (7, 'Grace', 'Moore', 'grace.moore@example.com', '555-0107', 7),
    (8, 'Hank', 'Taylor', 'hank.taylor@example.com', '555-0108', 8),
    (9, 'Ivy', 'Anderson', 'ivy.anderson@example.com', '555-0109', 9),
    (10, 'Jack', 'Thomas', 'jack.thomas@example.com', '555-0110', 10),
    (11, 'Kathy', 'Jackson', 'kathy.jackson@example.com', '555-0111', 11),
    (12, 'Liam', 'White', 'liam.white@example.com', '555-0112', 12),
    (13, 'Mona', 'Harris', 'mona.harris@example.com', '555-0113', 13),
    (14, 'Nathan', 'Martin', 'nathan.martin@example.com', '555-0114', 14),
    (15, 'Olivia', 'Garcia', 'olivia.garcia@example.com', '555-0115', 15),
    (16, 'Paul', 'Clark', 'paul.clark@example.com', '555-0116', 16),
    (17, 'Quinn', 'Lewis', 'quinn.lewis@example.com', '555-0117', 17),
    (18, 'Rachel', 'Walker', 'rachel.walker@example.com', '555-0118', 18),
    (19, 'Steve', 'Hall', 'steve.hall@example.com', '555-0119', 19),
    (20, 'Tina', 'Allen', 'tina.allen@example.com', '555-0120', 20);

-- Inserta más registros en Users
INSERT INTO Users (Id, FirstName, LastName, Email, PhoneNumber, DepartmentId) VALUES
    (21, 'User1', 'Last1', 'user1@example.com', '555-0121', 1),
    (22, 'User2', 'Last2', 'user2@example.com', '555-0122', 1),
    (23, 'User3', 'Last3', 'user3@example.com', '555-0123', 1),
    (24, 'User4', 'Last4', 'user4@example.com', '555-0124', 1),
    (25, 'User5', 'Last5', 'user5@example.com', '555-0125', 1),
    (26, 'User6', 'Last6', 'user6@example.com', '555-0126', 1),
    (27, 'User7', 'Last7', 'user7@example.com', '555-0127', 1),
    (28, 'User8', 'Last8', 'user8@example.com', '555-0128', 1),
    (29, 'User9', 'Last9', 'user9@example.com', '555-0129', 1),
    (30, 'User10', 'Last10', 'user10@example.com', '555-0130', 1),
    (31, 'User11', 'Last11', 'user11@example.com', '555-0131', 1),
    (32, 'User12', 'Last12', 'user12@example.com', '555-0132', 1),
    (33, 'User13', 'Last13', 'user13@example.com', '555-0133', 1),
    (34, 'User14', 'Last14', 'user14@example.com', '555-0134', 1),
    (35, 'User15', 'Last15', 'user15@example.com', '555-0135', 1);