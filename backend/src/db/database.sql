DROP DATABASE IF EXISTS flipper;
CREATE DATABASE flipper;
USE flipper;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  `id` SERIAL PRIMARY KEY,
  `firstname` VARCHAR(50),
  `lastname` VARCHAR(50),
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `gender` ENUM('M', 'F'),
  `role` ENUM('USER', 'MODER', 'ADMIN') DEFAULT 'USER',
  `email` VARCHAR(70) NOT NULL UNIQUE,
  `password_hash` VARCHAR(150) NOT NULL,
  `registered_at` DATETIME NOT NULL,
  `is_deleted` BIT DEFAULT 0
);

DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
  `id` SERIAL PRIMARY KEY,
  `user_id` BIGINT UNSIGNED NOT NULL,
  `content` text NOT NULL,
  `date_created` DATETIME NOT NULL,
  `date_updated` DATETIME,

  FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO users(firstname, lastname, username, gender, email, password_hash, registered_at)
VALUES
('Teser', 'Fades', 'tes_fad', 'M', 'g@fda.ru', 'vfdsgdfs', '12-01-16 12:32');