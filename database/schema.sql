CREATE TABLE Items (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name NVARCHAR(100) NOT NULL
);

INSERT INTO Items (name) VALUES
('Item 1'),
('Item 2'),
('Item 3');