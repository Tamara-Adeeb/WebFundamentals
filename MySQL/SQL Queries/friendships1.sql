/*Return all users who are friends with Kermit, make sure their names are displayed in results.*/
SELECT users.first_name, users.last_name, users.id FROM friendships
JOIN users ON friendships.user_id = users.id
JOIN users AS users2 ON friendships.friend_id = users2.id
WHERE friendships.user_id = 1;

/*Return the count of all friendships*/
SELECT COUNT(friendships.id) FROM friendships;

/*Find out who has the most friends and return the count of their friends.*/
SELECT COUNT(friend_id), CONCAT(users.first_name,'  ', users.last_name) FROM friendships
JOIN users ON friendships.user_id = users.id
GROUP BY friendships.user_id
ORDER BY COUNT(friend_id) DESC
LIMIT 1;

/*Create a new user and make them friends with Eli Byers, Kermit The Frog, and Marky Mark*/
SELECT * FROM friendships;
SELECT * FROM users;
INSERT INTO users (first_name,last_name) VALUES ('New', 'Usre');
INSERT INTO friendships (user_id,friend_id,created_at) VALUES (6,2, NOW());
INSERT INTO friendships (user_id,friend_id,created_at) VALUES (6,4, NOW());
INSERT INTO friendships (user_id,friend_id,created_at) VALUES (6,5, NOW());

/*Return the friends of Eli in alphabetical order*/
SELECT users.first_name, users.last_name FROM users
JOIN friendships ON users.id = friendships.friend_id
JOIN users AS user2 ON friendships.user_id = user2.id
WHERE friendships.user_id = 2;
/*alphabetical order is by defult*/

/*Remove Marky Mark from Eli’s friends.*/
DELETE FROM users WHERE users.id = 5;

/*Return all friendships, displaying just the first and last name of both friends*/
SELECT users.first_name, users.last_name, user2.first_name, user2.last_name FROM users
JOIN friendships ON users.id = friendships.friend_id
JOIN users AS user2 ON friendships.user_id = user2.id;

