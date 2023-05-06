<!-- Cardz is a comprehensive full-stack application designed to enable users to efficiently input, store, retrieve, and manage contact information with the added flexibility of editing and deleting data as needed. 

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

Once the login screen appears, you will need to register and provide a password, then you will need to login in order to access the app.
 -->





# Cardz

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description

Cardz is a web-based application that allows users to conveniently store personal and business card data into a database while having the ability to add comments, see the entry date, and also view an image of the card via a link. Cardz will help get rid of the clutter in your wallets and purses while providing ease of access to your contacts. 

## Screenshots

<img src="<img src="https://i.postimg.cc/4NFw7d4P/Screenshot-2023-05-05-at-1-31-41-PM.png" /> 

## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

## Getting Started

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

This app uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`). Please follow the instructions below.

### Prerequisites

Cardz will require a database.
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

```

### Installation

- In VS Code terminal, type `npm install`
- Create a `.env` file at the root of the project and paste this line into the file
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.

On your VS Code terminal you will need at least two terminal windows and you will need to type the following run commands into each terminal.
- On one terminal, type: `npm run server`
- On the other, type `npm run client`
- A new window browser should open or you can navigate to `localhost:3000`

## Usage

Once the login screen appears, you will need to register and provide a password, then you will need to login in order to access the app.


## License

<a href="https://choosealicense.com/licenses/mit/"><img src="https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/mit.svg" height=40 />MIT License</a>

## Acknowledgements

Special thanks to the Prime Digital Academy Instructors and the aquamarine cohort. Thank you for your assistance, guidance, and help in getting this app up and running. Thank You So Much!

## Contacts

<a href="https://www.linkedin.com/in/https://www.linkedin.com/in/lee-xiong-069ab7154/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:tadbitz@yahoo.com"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>