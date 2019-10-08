USE crud_db;
-- Monthly DefinedTasks
INSERT INTO definedTasks
    (task, frequency)
VALUES
    ('Inspect HVAC filter, replace if dirty', 'Monthly');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Clean kitchen sink disposal', 'Monthly');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Inspect fire extinguisher', 'Monthly');

-- Quarterly task
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Test smoke/carbon dioxide detectors', 'Quarterly');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Run water and flush toilets in unused spaces', 'Quarterly');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Check water softener, add salt if needed', 'Quarterly');

-- Biannual DefinedTasks
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Test your water heater’s pressure relief valve', 'Biannually');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Replace batteries in smoke/carbon dioxide detectors', 'Biannually');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Vacuum refrigerator coils', 'Biannually');

-- Annual DefinedTasks
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Flush hot water heater and remove sediment', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Inspect plumbing for leaks, clean faucet aerators', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Check all locks and deadbolts to doors and windows to ensure they are working properly', 'Annual');


-- Annual by season 

-- Spring
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Clean gutters', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Get air conditioning system ready for summer', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Clear dead plants/shrubs/leaves ', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Lawnmower check-up to make sure it ready for summer', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Inspect roof, siding or brick for damage', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Fertilize lawn', 'Annual');


-- Summer

INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Clean and repair deck/patio, washing and restaining, as needed', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Clean out window wells of debris', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Check and clean dryer vent and other exhaust vents to exterior of home', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Clean garage', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Take care of any insect problems in yard or exterior of home', 'Annual');


--Fall DefinedTasks
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Winterize air conditioning system and cover it', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Turn off and flush outdoor water faucets and sprinkler system', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Wrap insulation around outdoor faucets', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Get chimney cleaned out', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Rake leaves and aerate lawn', 'Annual');


-- Winter
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Regularly check for ice dams and icicles on roof and remove', 'Annual');
INSERT INTO DefinedTasks
    (task, frequency)
VALUES
    ('Replacing window screens and screen doors with storm windows and doors', 'Annual'); 
    
    