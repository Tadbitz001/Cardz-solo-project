
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
--Drop tables
DROP TABLE "user";
DROP TABLE "card_info";
DROP TABLE "profile";

--create table profile
CREATE TABLE "profile" (
	"id" serial primary key,
	"first_name" varchar(50) not null,
	"last_name" varchar(50) not null,
	"user_email" varchar(200) not null,
	"user_number" bigint,
	"user_id" varchar(100) not null
	);
INSERT INTO "profile"
	("first_name", "last_name", "user_email", "user_number", "user_id")
VALUES
	('John', 'Smith', 'jsmith@yahoo.com', 6122222222, 1),
	('Aqua', 'Marine', 'aquamarine@yahoo.com', 6123333333, 1);

--create table card_info
CREATE TABLE "card_info" (
	"id" serial primary key,
	"contact_name" varchar(50),
	"contact_business" varchar(50),
	"contact_number" bigint,
	"contact_address" varchar(100),
	"contact_city" varchar(100),
	"contact_state" varchar(100),
	"contact_url" varchar(1000),
	"contact_notes" varchar(1000),
	"contact_image" varchar(200)
	);
	
INSERT INTO "card_info"
	("contact_name", "contact_business", "contact_number", "contact_address", "contact_city", "contact_state", "contact_url", "contact_notes", "contact_image")
VALUES
	('Jimmy Johnson', '', 6120000000, '301 South 4th ave.', 'Minneapolis', 'MN', '', 'Really tall guy with beard', ''),
	('', 'Geico', 6124444444, '', '', '', 'http://geico.com', 'act: 212345677 Due: Dec 29 2023', ''),
	('Tim Tebow', '', 6510000000, '', '', '', '', 'Need to get some advice from him ASAP', ''),
	('', 'CubFoods', 61211111111, '', '', '', '', 'Dont forget clearance items at end of year!', '');