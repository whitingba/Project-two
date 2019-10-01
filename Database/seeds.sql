USE crud_db;
-- Monthly tasks
INSERT INTO tasks
    (task, frequency, location)
VALUES
    ('Inspect HVAC filter, replace if dirty', 'Monthly', 'indoor');
INSERT INTO tasks
    (task, frequency, location)
VALUES
    ('Clean kitchen sink disposal', 'Monthly', 'indoor');
INSERT INTO tasks
    (task, frequency, location)
VALUES
    ('Inspect fire extinguisher', 'Monthly', 'indoor');

-- Quarterly task
INSERT INTO tasks
    (task, frequency, location)
VALUES
    ('Test smoke/carbon dioxide detectors', 'Quarterly', 'indoor');
INSERT INTO tasks
    (task, frequency, location)
VALUES
    ('Run water and flush toilets in unused spaces', 'Quarterly', 'indoor');
INSERT INTO tasks
    (task, frequency, location)
VALUES
    ('Check water softener, add salt if needed', 'Quarterly', 'indoor');

-- Biannual tasks
INSERT INTO tasks
    (task, frequency, location)
VALUES
    ('Test your water heater’s pressure relief valve', 'Biannually', 'indoor');
INSERT INTO tasks
    (task, frequency, location)
VALUES
    ('Replace batteries in smoke/carbon dioxide detectors', 'Biannually', 'indoor');
INSERT INTO tasks
    (task, frequency, location)
VALUES
    ('Vacuum refrigerator coils', 'Biannually', 'indoor');

-- Annual tasks
INSERT INTO tasks
    (task, frequency, location)
VALUES
    ('Flush hot water heater and remove sediment', 'Annual', 'indoor');
INSERT INTO tasks
    (task, frequency, location)
VALUES
    ('Inspect plumbing for leaks, clean faucet aerators', 'Annual', 'indoor');
INSERT INTO tasks
    (task, frequency, location)
VALUES
    ('Check all locks and deadbolts to doors and windows to ensure they are working properly', 'Annual', 'indoor');


-- Annual by season 

-- Spring
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Clean gutters', 'Annual', 'outdoor', 'spring');
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Get air conditioning system ready for summer', 'Annual', 'outdoor', 'spring');
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Clear dead plants/shrubs/leaves ', 'Annual', 'outdoor', 'spring');
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Lawnmower check-up to make sure it ready for summer', 'Annual', 'outdoor', 'spring');
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Inspect roof, siding or brick for damage', 'Annual', 'outdoor', 'spring');
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Fertilize lawn', 'Annual', 'outdoor', 'spring');


-- Summer

INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Clean and repair deck/patio, washing and restaining, as needed', 'Annual', 'outdoor', 'summer');
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Clean out window wells of debris', 'Annual', 'outdoor', 'summer');
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Check and clean dryer vent and other exhaust vents to exterior of home', 'Annual', 'outdoor', 'summer');
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Clean garage', 'Annual', 'outdoor', 'summer');
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Take care of any insect problems in yard or exterior of home', 'Annual', 'outdoor', 'summer');


-- Fall
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Winterize air conditioning system and cover it', 'Annual', 'outdoor', 'fall');
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Turn off and flush outdoor water faucets and sprinkler system', 'Annual', 'outdoor', 'fall');
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Wrap insulation around outdoor faucets', 'Annual', 'outdoor', 'fall');
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Get chimney cleaned out', 'Annual', 'outdoor', 'fall');
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Rake leaves and aerate lawn', 'Annual', 'outdoor', 'fall');


-- Winter
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Regularly check for ice dams and icicles on roof and remove', 'Annual', 'outdoor', 'winter');
INSERT INTO tasks
    (task, frequency, location, season)
VALUES
    ('Replacing window screens and screen doors with storm windows and doors', 'Annual', 'outdoor', 'winter'); 
    
    