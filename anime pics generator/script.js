"use strict";
const hiddenContainer = document.querySelector(".anime-container");
const btn = document.querySelector(".btn");
const image = document.querySelector(".image");
const animeName = document.querySelector(".anime-name");

function getAnimeInfo() {}

btn.addEventListener("click", async function () {
  try {
    btn.disabled = true;
    btn.textContent = "Loading...";
    animeName.textContent = "Loading...";
    image.src = "spinner2.svg";
    const response = await fetch("https://api.catboys.com/img");
    const data = await response.json();
    hiddenContainer.style.display = "block";
    image.src = data.url;
    animeName.textContent = data.artist;
    btn.disabled = false;
    btn.textContent = "Get Anime";
  } catch (error) {
    btn.disabled = true;
    animeName.textContent = "No Internet Connection";
  }
});
