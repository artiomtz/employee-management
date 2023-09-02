-- create an empty employees table
DROP TABLE IF EXISTS `Employees`;
CREATE TABLE `Employees` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `firstName` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `salary` INT
);

-- insert initial data
INSERT INTO `Employees` (`firstName`, `lastName`, `salary`)
VALUES
  ('Lewis', 'Burson', 40700),
  ('Ian', 'Malcolm', 70000),
  ('Ellie', 'Sattler', 102000),
  ('Dennis', 'Nedry', 52000),
  ('John', 'Hammond', 89600),
  ('Ray', 'Arnold', 45000),
  ('Laura', 'Burnett', 80000);
