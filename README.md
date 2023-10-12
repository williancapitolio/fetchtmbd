
# FetchTMDB

Get a list of movies that are currently in cinemas.

![App Screenshot](https://github.com/williancapitolio/fetchtmbd/blob/main/src/public/screenshot/homepage.png)

## Table of contents
   * [About](#About)
   * [Technologies](#Technologies)
   * [Installation](#Installation)
   * [Running](#Running)
   * [Variables](#Variables)
   * [Features](#Features)

### About

This project was created to improve skills with React and Fetch API. The API chosen was [TMDB](https://www.themoviedb.org/).

* Initially an API KEY is generated for the user who accesses the system and this KEY is stored in localstorage;

* Home page shows in the form of cards the 100 movies that are being shown in world cinema ordered by rating;

* Cards show the title the banner and the average rating of the movie;

* Cards also have a "Detalhes" button that takes you to a page where there is detail about the movie;

* Guest user (using the API key created when starting the app) can rate a movie from 0.5 to 10.0;

* When rated a movie a success toast message/notification will be displayed for 2 seconds;

* Rated movies can be seen by navigating to the "Avaliações" page;

* Guest user can remove an rate;

* Guest user can search a movie by the name.

### Technologies

* Typescript
* React
    * Vite
    * React Router Dom
    * React Icons
* SASS
    * CSS Module

### Installation

Before starting, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Furthermore, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

### Running

```bash
# Clone this repo
$ git clone https://github.com/williancapitolio/fetchtmbd

# Access the project folder in terminal/cmd
$ cd fetchtmbd

# Install dependencies
$ npm install

# Run the application in development mode
$ npm run dev

# Server will start on port:5173 - access http://localhost:5173
```

### Variables

* VITE_API_KEY
* VITE_TOKEN

The variables above are the most important. TOKEN and API KEY

* VITE_URL_NEW_GUEST_SESSION
* VITE_URL_NOW_PLAYING
VITE_URL_MOVIE_DETAILS
* VITE_URL_RATING
* VITE_URL_RATED_MOVIES
* VITE_URL_SEARCHED_MOVIES

URLs taken directly from the TMDB API documentation

* VITE_IMG_FULL
* VITE_IMG_MD
* VITE_IMG_LG
* VITE_BACKDROP_PATH

API image path taken directly from the TMDB API documentation

* VITE_IMG_NO_IMG

Path of public images of the project

### Features

- [X]  Single movie page
- [X]  Search bar for movies
- [X]  Pagination
- [ ]  Get username when APP start
