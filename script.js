"use strict";

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");

// First Page Load Joke
generateJoke();

async function generateJoke() {
  // Grabs joke from the Header of website
  const config = {
    headers: {
      accept: "application/json",
    },
  };

  // Fetches a Response from website
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();

  joke.textContent = data.joke;
}

// Button loads a new joke
btn.addEventListener("click", generateJoke);

// async function getJoke() {
//   const response = await fetch("http://api.codebazan.ir/jok/khatere", {
//     cache: "no-cache",
//   });
//   const data = await response.text();
//   console.log(data);
//   // joke.textContent = data;
// }

// const response = await fetch("http://api.codebazan.ir/jok/khatere", {
//   cache: "no-cache",
// });
