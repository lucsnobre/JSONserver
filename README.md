<div align="center">

# Carrossel JSON Server

<p align="center">
  <strong>Uma experiência visual imersiva para navegação de fotos</strong>
</p>

<p align="center">
  <img src="./readme/screencapture-127-0-0-1-5500-FrontEnd-2025-08-02-01_45_55.png" alt="Screenshot do Carrossel JSON Server" />
</p>

<div align="center">

[![Status](https://img.shields.io/badge/Status-Ativo-brightgreen?style=for-the-badge)](#)
[![Versão](https://img.shields.io/badge/Versão-1.0.0-blue?style=for-the-badge)](#)
[![Licença](https://img.shields.io/badge/Licença-MIT-yellow?style=for-the-badge)](#)

</div>

---

## ✨ Sobre o Projeto

O **Carrossel JSON Server** é uma aplicação web moderna que oferece uma experiência visual única para navegação de fotos. Desenvolvido com foco na estética **Frutiger Aero**, combina elementos translúcidos, paleta de cores neutra e animações suaves para criar uma interface profissional e imersiva.

<table>
<tr>
<td width="50%">

### 🎨 **Design Moderno**
- Interface com estética Frutiger Aero
- Elementos translúcidos e efeitos de vidro
- Paleta de cores neutra e escura
- Tipografia moderna (Inter + JetBrains Mono)

</td>
<td width="50%">

### ⚡ **Funcionalidades**
- Carrossel horizontal com fotos laterais visíveis
- Loop infinito de navegação
- Legendas animadas e estilizadas
- Responsivo para dispositivos móveis

</td>
</tr>
</table>

---

## 🛠️ Tecnologias Utilizadas

<div align="center">

| Frontend | Backend | Estilo |
|:--------:|:-------:|:------:|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | ![JSON Server](https://img.shields.io/badge/JSON_Server-000000?style=flat-square&logo=json&logoColor=white) | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white) | ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white) |

</div>

---

## 🚀 Como Executar

### Pré-requisitos

```bash
# Node.js instalado em sua máquina
# npm ou yarn como gerenciador de pacotes
```

### Instalação

<details>
<summary><strong>📋 Passo a passo</strong></summary>

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd ProjetoJSONserver
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o JSON Server**
   ```bash
   npm start
   # ou
   npx json-server --watch API/db.json --port 3000
   ```

4. **Abra o projeto**
   - Navegue até `FrontEnd/index.html`
   - Abra em um servidor local ou diretamente no navegador

</details>

---

## 📁 Estrutura do Projeto

```
ProjetoJSONserver/
├── 📂 API/
│   └── 📄 db.json              # Banco de dados das fotos
├── 📂 FrontEnd/
│   ├── 📄 index.html           # Estrutura HTML
│   ├── 📄 style.css            # Estilos e animações
│   └── 📄 script.js            # Lógica JavaScript
├── 📄 package.json             # Configurações do projeto
└── 📄 README.md               # Documentação
```

---

## 🎯 Funcionalidades Detalhadas

<div align="center">

| Funcionalidade | Descrição | Status |
|:---------------|:----------|:------:|
| **Carrossel Horizontal** | Navegação fluida entre fotos com laterais visíveis | ✅ |
| **Loop Infinito** | Navegação contínua sem fim de lista | ✅ |
| **Fotos Ofuscadas** | Efeito blur nas fotos laterais | ✅ |
| **Legendas Animadas** | Legendas que deslizam suavemente | ✅ |
| **Design Responsivo** | Adaptação para dispositivos móveis | ✅ |
| **Efeitos Translúcidos** | Elementos com backdrop-filter | ✅ |

</div>

---

## 🎨 Paleta de Cores

<div align="center">

| Cor | Hex | Uso |
|:---:|:---:|:---:|
| ![#0a0a0a](https://via.placeholder.com/20/0a0a0a/0a0a0a.png) | `#0a0a0a` | Background Principal |
| ![#1a1a1a](https://via.placeholder.com/20/1a1a1a/1a1a1a.png) | `#1a1a1a` | Background Secundário |
| ![#e8e8e8](https://via.placeholder.com/20/e8e8e8/e8e8e8.png) | `#e8e8e8` | Texto Principal |
| ![#a8a8a8](https://via.placeholder.com/20/a8a8a8/a8a8a8.png) | `#a8a8a8` | Texto Secundário |
| ![#c8c8d0](https://via.placeholder.com/20/c8c8d0/c8c8d0.png) | `#c8c8d0` | Texto Accent |

</div>

---

## 📸 Capturas de Tela

> **Substitua esta seção pela imagem real do seu projeto**

<div align="center">

### Desktop
<img src="https://via.placeholder.com/600x300/1a1a1a/e8e8e8?text=Desktop+View" alt="Visualização Desktop" width="600" />

### Mobile
<img src="https://via.placeholder.com/300x500/1a1a1a/e8e8e8?text=Mobile+View" alt="Visualização Mobile" width="300" />

</div>

---

## 🤝 Contribuição

<div align="center">

Contribuições são sempre bem-vindas!

[![Contribuir](https://img.shields.io/badge/Contribuir-Clique_Aqui-brightgreen?style=for-the-badge)](#)

</div>

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

<div align="center">

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  <strong>Desenvolvido com ❤️ para uma experiência visual única</strong>
</p>

<p align="center">
  <sub>Feito por [Seu Nome] • © 2025</sub>
</p>

</div>
