-- Crear la base de datos
CREATE DATABASE pruebatecnicaapi;

-- Usar la base de datos creada
USE pruebatecnicaapi;

-- Crear la tabla de departamentos
CREATE TABLE Departments (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL
);

-- Crear la tabla de usuarios
CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL
);

-- Crear la tabla de relación entre usuarios y departamentos
CREATE TABLE UserDepartments (
    UserId INT,
    DepartmentId INT,
    PRIMARY KEY (UserId, DepartmentId),
    FOREIGN KEY (UserId) REFERENCES Users(Id) ON DELETE CASCADE,
    FOREIGN KEY (DepartmentId) REFERENCES Departments(Id) ON DELETE CASCADE
);

-- Insertar datos en la tabla de departamentos
INSERT INTO Departments (Name) VALUES ('Administración');
INSERT INTO Departments (Name) VALUES ('RRHH');
INSERT INTO Departments (Name) VALUES ('Informática');

-- Insertar datos en la tabla de usuarios
INSERT INTO Users (Name, Password) VALUES ('Usuario1', 'password1');
INSERT INTO Users (Name, Password) VALUES ('Usuario2', 'password2');
INSERT INTO Users (Name, Password) VALUES ('Usuario3', 'password3');

-- Insertar datos en la tabla de relación entre usuarios y departamentos
INSERT INTO UserDepartments (UserId, DepartmentId) VALUES (1, 1);
INSERT INTO UserDepartments (UserId, DepartmentId) VALUES (1, 2);
INSERT INTO UserDepartments (UserId, DepartmentId) VALUES (2, 3);
INSERT INTO UserDepartments (UserId, DepartmentId) VALUES (3, 1);
