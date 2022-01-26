"use strict";

const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");

getJoke();

async function getJoke() {
  const response = await fetch("http://api.codebazan.ir/jok/khatere", {
    cache: "no-cache",
  });
  // const response = await fetch("http://api.codebazan.ir/jok/", {
  //   cache: "no-cache",
  // });
  const data = await response.text();
  joke.innerHTML = data;
}

btn.addEventListener("click", function () {
  getJoke();
});

// async function generateJoke() {
//   const config = {
//     headers: {
//       accept: "application/json",
//     },
//   };

//   const res = await fetch("http://api.codebazan.ir/jok/khatere", {
//     cache: "no-cache",
//   });
//   const res1 = await fetch("https://icanhazdadjoke.com", config);
//   const data = await res.text();
//   const data1 = await res1.text();

//   console.log(data);
//   console.log(data1);
// }

// generateJoke();
