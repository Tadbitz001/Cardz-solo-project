Cardz is a comprehensive full-stack application designed to enable users to efficiently input, store, retrieve, and manage contact information with the added flexibility of editing and deleting data as required. 

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

This app uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`). Please follow the instructions below.

## Create database and table

In Postgres create a new database called `Cardz` and create a `user` table, a `profile` table, and a `card_info` table by copying the data below into your database. The table `card_info` has some hard coded contacts below that can be inserted.

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

--create table profile
CREATE TABLE "profile" (
	"id" serial primary key,
	"first_name" varchar(50) not null,
	"last_name" varchar(50) not null,
	"user_email" varchar(200) not null,
	"user_number" bigint,
	"user_id" varchar(100) not null
	);

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

--optional to insert hardcoded samples
INSERT INTO "card_info"
	("contact_name", "contact_number", "contact_address", "contact_city", "contact_state", 	"contact_zip_code" ,"contact_url", "contact_notes", "contact_image", "indttm", "user_id")
VALUES
	('Jimmy Johnson', '6120000000', '301 South 4th ave.', 'Minneapolis', 'MN', '55455', '', 'Really tall guy with beard', '', '2023-04-27T23:42:12.393Z', 1),
	('Geico', '6124444444', '', '', '', '', 'http://geico.com', 'act: 212345677 Due: Dec 29 2023', '', '2023-04-27T23:42:12.393Z', 1),
	('Tim Tebow', '6510000000', '', '', '', '', '', 'Need to get some advice from him ASAP', '', '2023-04-27T23:42:12.393Z', 1),
	('CubFoods', '61211111111', '', '', '', '', '', 'Dont forget clearance items at end of year!', '', '2023-04-27T23:42:12.393Z',  1);
```

If you would like to name your database something else, you will need to change `Cardz` to the name of your new database name in `server/modules/pool.js`

## Setup Instructions

- In VS Code terminal, type `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.

On your VS Code terminal you will need at least two terminal windows and you will need to type the following run commands into each terminal.
- On one terminal, type: `npm run server`
- On the other, type `npm run client`
- A new window browser should open or you can navigate to `localhost:3000`

Once the login screen apears, you will need to register and provide a password, then you will need to login in order to access the app.


