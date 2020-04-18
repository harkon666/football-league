# football-league

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Server Setup](#server-setup)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Football League API List](#api-list)
  - [recordgame](#recordgame)
  - [leaguestanding](#leaguestanding)
  - [rank](#rank)
- [Author](#author)

## Getting Started

Before starting to install the project, there're some things that need to be done first.

### Prerequisites

Make sure all of these are properly installed in your system.

| Application | Download                                                                                                                      |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Git         | [Windows](https://gitforwindows.org/) / [Linux](https://git-scm.com/download/linux) / [Mac](https://git-scm.com/download/mac) |
| Node.js     | [Link](https://nodejs.org/en/download/)                                                                                       |

### Installation

First, clone this repository into your system.

```
git clone https://github.com/harkon666/football-league
```

Then, install all the packages that described in `package.json`

```
npm install
```

### Server Setup

For the server setup, first, make sure your PostgreSQL services is running fine. you'll find `config.json` inside `config` folder. Open and edit the `development` configuration to match your database setup.

```
  "development": {
    "username": "YOUR_USERNAME",
    "password": "YOUR_PASSWORD",
    "database": "YOUR_NAME_DATABASE",
    "host": "127.0.0.1",
    "dialect": "postgres/mysql/etc",
  },
```

After completing the database configuration setup, migrate all the required tables.

We also need to configure some environtment variables for the server, let's create .env file in server's root project, open and edit it, then input the code below.

```
PORT=8000
```

`PORT` you can custom it as you wish.

And for the last step, running the server

```
npm start
```

## Built With

- [Express JS](https://expressjs.com) - Back-end
- [PostgreSQL](https://www.postgresql.org/) - Database

## API List

| No  | URL                                              | Method   |
| --- | ------------------------------------------------ | -------- |
| 1   | _localhost:8000/football/recordgame_             | **POST** |
| 2   | _localhost:8000/football/leaguestanding_         | **GET**  |
| 3   | _localhost:8000/football/rank?clubname=clubname_ | **GET**  |

---

### recordgame

`localhost:8000/football/recordgame`

this api will post recordgame, post it with body raw parameter, use method: `post`

```
{
    "clubhomename": "Chelsea",
    "clubawayname": "Liverpool",
    "score": "1:2"
}
```

after post to it, it will decide who `win` or `draw`

Note: Dont mistype the club name in query and dont forget every Uppercase in first letter. If you forget name's club, use `localhost:8000/football/leaguestanding` api to get all clubname

---

### leaguestanding

`localhost:8000/football/leaguestanding`

this api will get all clubname with their point, method: `GET`

### rank

`localhost:8000/football/rank?clubname=clubname`

this api will get specific clubname with rank/standing, method: `get`

```
example:
localhost:8000/football/rank?clubname=Chelsea
```

Note: Dont mistype the club name in query and dont use quotation mark `rank?clubname"Chelsea"`, dont forget use Uppercase in first letter. If you forget name's club, use `localhost:8000/football/leaguestanding` api to get all clubname

---

## Author

**Bryan Dewa Wicaksana** - [harkon666](https://github.com/harkon666)
