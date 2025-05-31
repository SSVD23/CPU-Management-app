-- Insert CPU sockets
INSERT INTO sockets (name) VALUES 
    ('AM4'),
    ('LGA1200'),
    ('AM5'),
    ('LGA1700');

-- Insert sample CPUs
INSERT INTO cpus (brand, model, clock_speed, cores, threads, tdp, price, socket_id) VALUES 
    ('AMD', 'Ryzen 5 5600X', 3.7, 6, 12, 65, 199.99, 1),
    ('Intel', 'Core i5-12400F', 2.5, 6, 12, 65, 179.99, 4),
    ('AMD', 'Ryzen 7 5800X', 3.8, 8, 16, 105, 299.99, 1),
    ('Intel', 'Core i7-12700K', 3.6, 12, 20, 125, 379.99, 4),
    ('AMD', 'Ryzen 9 5950X', 3.4, 16, 32, 105, 549.99, 1),
    ('Intel', 'Core i9-12900K', 3.2, 16, 24, 125, 589.99, 4),
    ('AMD', 'Ryzen 7 7700X', 4.5, 8, 16, 105, 399.99, 3),
    ('Intel', 'Core i5-11400', 2.6, 6, 12, 65, 159.99, 2); 