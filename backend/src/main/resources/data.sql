-- Delete existing data first
DELETE FROM cpus;
DELETE FROM sockets;

-- Reset auto-increment
ALTER TABLE cpus AUTO_INCREMENT = 1;
ALTER TABLE sockets AUTO_INCREMENT = 1;

-- Insert socket types first
INSERT INTO sockets (name) VALUES ('AM4');
INSERT INTO sockets (name) VALUES ('LGA1700');
INSERT INTO sockets (name) VALUES ('AM5');
INSERT INTO sockets (name) VALUES ('LGA1200');

-- Insert CPUs
INSERT INTO cpus (brand, model, socket_id, clock_speed, cores, threads, tdp, price) VALUES 
('AMD', 'Ryzen 7 5800X', 1, 3.8, 8, 16, 105, 449.99),
('Intel', 'Core i9-12900K', 2, 3.2, 16, 24, 125, 589.99),
('AMD', 'Ryzen 9 7950X', 3, 4.5, 16, 32, 170, 699.99),
('Intel', 'Core i7-12700K', 2, 3.6, 12, 20, 125, 409.99),
('AMD', 'Ryzen 5 5600X', 1, 3.7, 6, 12, 65, 299.99),
('Intel', 'Core i5-11600K', 4, 3.9, 6, 12, 125, 269.99),
('AMD', 'Ryzen 9 5950X', 1, 3.4, 16, 32, 105, 799.99),
('Intel', 'Core i5-12400F', 2, 2.5, 6, 12, 65, 179.99),
('AMD', 'Ryzen 7 7700X', 3, 4.5, 8, 16, 105, 399.99),
('Intel', 'Core i9-11900K', 4, 3.5, 8, 16, 125, 539.99); 