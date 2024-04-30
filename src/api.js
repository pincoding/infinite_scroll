const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTBhNmQ4ZWUzNmEwMWE1OGNkOTg3Zjg1YzM1OWI5MCIsInN1YiI6IjY1ZWZmZmQ1ZmNlYzJlMDE3YTgyN2U4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A9uZhphMhaXEiH0HzpOcovZuAhWlWal6HwkVAAlW5-A",
  },
};

export const getMovie = (page) => {
  const url = baseUrl + `movie/now_playing?&page=${page}`;
  return fetch(url, options).then((res) => res.json());
};

// 무한 스크롤 조건 :
