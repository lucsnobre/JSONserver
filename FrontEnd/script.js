"use strict";

const API_URL = "http://localhost:3000/fotos"; // ajuste se seu json-server rodar em outra porta

const track = document.getElementById("carousel-track");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;
let images = [];

async function loadImages() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Falha ao carregar imagens");
    images = await res.json();
    renderImages();
  } catch (err) {
    console.error(err);
    track.innerHTML = `<p class="error">Não foi possível carregar as fotos 😢</p>`;
  }
}

function renderImages() {
  track.innerHTML = images
    .map(
      (foto) => `
        <div class="carousel-item">
          <img src="${foto.imagem}" alt="${foto.legenda}" />
          <p class="caption">${foto.legenda}</p>
        </div>`
    )
    .join("");
  updateCarousel();
}

function updateCarousel() {
  const offset = -index * 100;
  track.style.transform = `translateX(${offset}%)`;
}

function showPrev() {
  if (index > 0) {
    index--;
    updateCarousel();
  }
}

function showNext() {
  if (index < images.length - 1) {
    index++;
    updateCarousel();
  }
}

prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

document.addEventListener("DOMContentLoaded", loadImages);