USE crud_db;
-- Monthly tasks
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Inspect HVAC filter, replace if dirty', 'Monthly');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Clean kitchen sink disposal', 'Monthly');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Inspect fire extinguisher', 'Monthly');

-- Quarterly task
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Test smoke/carbon dioxide detectors', 'Quarterly');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Run water and flush toilets in unused spaces', 'Quarterly');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Check water softener, add salt if needed', 'Quarterly');

-- Biannual tasks
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Test your water heater’s pressure relief valve', 'Biannually');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Replace batteries in smoke/carbon dioxide detectors', 'Biannually');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Vacuum refrigerator coils', 'Biannually');

-- Annual tasks
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Flush hot water heater and remove sediment', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Inspect plumbing for leaks, clean faucet aerators', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Check all locks and deadbolts to doors and windows to ensure they are working properly', 'Annual');


-- Annual by season 

-- Spring
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Clean gutters', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Get air conditioning system ready for summer', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Clear dead plants/shrubs/leaves ', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Lawnmower check-up to make sure it ready for summer', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Inspect roof, siding or brick for damage', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Fertilize lawn', 'Annual');


-- Summer

INSERT INTO tasks
    (task, frequency)
VALUES
    ('Clean and repair deck/patio, washing and restaining, as needed', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Clean out window wells of debris', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Check and clean dryer vent and other exhaust vents to exterior of home', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Clean garage', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Take care of any insect problems in yard or exterior of home', 'Annual');


--Fall Tasks
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Winterize air conditioning system and cover it', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Turn off and flush outdoor water faucets and sprinkler system', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Wrap insulation around outdoor faucets', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Get chimney cleaned out', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Rake leaves and aerate lawn', 'Annual');


-- Winter
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Regularly check for ice dams and icicles on roof and remove', 'Annual');
INSERT INTO tasks
    (task, frequency)
VALUES
    ('Replacing window screens and screen doors with storm windows and doors', 'Annual'); 
    
    