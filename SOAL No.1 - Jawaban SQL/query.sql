SELECT p1.ID, p1.UserName, p2.UserName as ParentUserName
FROM User as p1 LEFT JOIN User as p2 on p1.Parent = p2.ID
ORDER BY p1.ID ASC