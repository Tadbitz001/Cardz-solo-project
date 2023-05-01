
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
	"contact_name" varchar(100),
	"contact_number" varchar(20),
	"contact_address" varchar(200),
	"contact_city" varchar(200),
	"contact_state" varchar(100),
	"contact_zip_code" varchar(100),
	"contact_url" varchar(1000),
	"contact_notes" varchar(5000),
	"contact_image" varchar(1000),
	"indttm" TIMESTAMP default NOW() NOT NULL,
	"user_id" varchar(100) not null
	);
	
INSERT INTO "card_info"
	("contact_name", "contact_number", "contact_address", "contact_city", "contact_state", 	"contact_zip_code" ,"contact_url", "contact_notes", "contact_image", "indttm", "user_id")
VALUES
	('Jimmy Johnson', '6120000000', '301 South 4th ave.', 'Minneapolis', 'MN', '55455', '', 'Really tall guy with beard', '', '2023-04-27T23:42:12.393Z', 1),
	('Geico', '6124444444', '', '', '', '', 'http://geico.com', 'act: 212345677 Due: Dec 29 2023', '', '2023-04-27T23:42:12.393Z', 1),
	('Tim Tebow', '6510000000', '', '', '', '', '', 'Need to get some advice from him ASAP', '', '2023-04-27T23:42:12.393Z', 1),
	('CubFoods', '61211111111', '', '', '', '', '', 'Dont forget clearance items at end of year!', '', '2023-04-27T23:42:12.393Z',  1);