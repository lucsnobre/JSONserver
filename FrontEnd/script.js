"use strict";

const URL_API = "http://localhost:3000/fotos"

const trilhaFotos = document.getElementById("trilha-fotos")
const botaoAnterior = document.getElementById("botao-anterior")
const botaoProximo = document.getElementById("botao-proximo")

let indiceAtual = 0
let minhasFotos = []

async function carregarFotos() {
  try {
    const resposta = await fetch(URL_API)
    if (!resposta.ok) throw new Error("Falha ao carregar imagens")
    minhasFotos = await resposta.json()
    mostrarFotos()
  } catch (erro) {
    console.error(erro)
    trilhaFotos.innerHTML = `<p class="erro">Não foi possível carregar as fotos 😢</p>`
  }
}

function mostrarFotos() {
  trilhaFotos.innerHTML = minhasFotos
    .map(
      (foto) => `
        <div class="item-foto">
          <img src="${foto.imagem}" alt="${foto.legenda}" />
          <p class="legenda">${foto.legenda}</p>
        </div>`
    )
    .join("")
  atualizarCarrossel()
}

function atualizarCarrossel() {
  const itensFoto = document.querySelectorAll('.item-foto')
  itensFoto.forEach((item, i) => {
    item.classList.remove('ativo')
    if (i === indiceAtual) {
      item.classList.add('ativo')
    }
  })
  
  // Centralizar o item ativo
  const deslocamento = -indiceAtual * 33.333 // 33.333% largura por item
  trilhaFotos.style.transform = `translateX(${deslocamento}%)`
}

function voltarFoto() {
  if (indiceAtual > 0) {
    indiceAtual--
  } else {
    // Loop infinito: vai para a última imagem
    indiceAtual = minhasFotos.length - 1
  }
  atualizarCarrossel()
}

function proximaFoto() {
  if (indiceAtual < minhasFotos.length - 1) {
    indiceAtual++
  } else {
    // Loop infinito: volta para a primeira imagem
    indiceAtual = 0
  }
  atualizarCarrossel()
}

botaoAnterior.addEventListener("click", voltarFoto)
botaoProximo.addEventListener("click", proximaFoto)

document.addEventListener("DOMContentLoaded", carregarFotos)