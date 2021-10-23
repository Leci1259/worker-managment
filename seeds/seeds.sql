INSERT INTO
    departments (name)
VALUES
    ("Developer"),
    ("Legal"),
    ("Finance"),
    ("Customer Service"),
    ("HR");

INSERT INTO
    roles (title, salary, department_id)
VALUES
    ("Frontend Developer", 80000, 1),
    ("Backend Developer", 95000, 1),
    ("Fullstack Developer", 120000, 1),
    ("Junior Developer", 65000, 1),
    ("Paralegal", 64000, 2),
    ("Lawyer", 100000, 2),
    ("Clerk", 63000, 2),
    ("Accountant", 80000, 3),
    ("Financial Analyst", 120000, 3),
    ("Auditor",66000,3),
    ("Customer Service Agent",20000,4),
    ("Call Center Representative", 22000, 4),
    (" Implementation Specialist",55000,4),
    ("Staffing coordinator",25000,5),
    ("HR generalist", 75000, 5),
    ("Benefits administrator",87000,5);

INSERT INTO
    employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Lesiana", "Reid", 3, NULL),
    ("Kelsey", "Perkins", 1, 1),
    ("Reagin", "Turner", 2, 1),
    ("Luther", "Lucier", 5, 2),
    ("Kellani", "Lettsome", 4, 1),
    ("Taylor", "Goree", 6, NULL),
    ("Mia", "Ricks", 7, 5),
    ("Sophie", "Zemrani", 8, 3),
    ("Brianna", "Williams", 15, 2)
    ("Knomi", "Smith", 9, NULL),
    ("Daija", "Moody", 10, 2),
    ("Jesseka", "Chatman", 11, 5),
    ("Tiffany", "Stewart", 12, 9),
    ("Shunty", "Ringfield", 13, 9),
    ("Kameryn", "Tucker", 14, 3),
    ("Mykell", "Lambert", 16, 2);