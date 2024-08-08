<template>
  <the-navigation></the-navigation>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: { TheNavigation },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 1.4rem;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li,
ol li,
li {
  list-style: none;
}
img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

html {
  font-size: 62.5%;
  /* overflow-x: hidden; */
}

/*
- Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Spacing system (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
*/

/*-------------------------------------------------------*/

:root {
  --bg-color: #141414;
  --text-color: #fff;
  --gray-text-color: #c5c5c5;
  --card-border-color: #e9e9e9;
  --card-bg-color: #2b2b2b;
  --nav-bg-color: #0a0a0a;
  --nav-tab-text-hover-color: #e9e9e9;
  --nav-tab-bg-hover-color: #141414;
}

@font-face {
  font-family: 'Century Gothic';
  src: url('./assets/fonts/centurygothic.ttf');
}

@font-face {
  font-family: 'GOST type B';
  src: url('./assets/fonts/gost_type_b.ttf');
}

body {
  font-family: 'GOST type B';
  background-color: var(--bg-color);
  color: var(--text-color);
}

main {
  max-width: 140rem;
  margin: 0 auto;
  padding: 6.4rem 0;
}

.list__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3.2rem;
}

/* CARD */
.item__card {
  transition: transform 0.3s ease;
  cursor: pointer;
}

.item__card:hover {
  transform: translateY(-10px);
}

.card {
  border: 1px solid var(--card-border-color);
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  padding: 2.4rem;
  background-color: var(--card-bg-color);
  min-height: 28rem;
}

img {
  border-radius: 50%;
  max-width: 75%;
  margin-bottom: 2.4rem;
  border: 2px solid var(--card-border-color);
}

.line {
  margin: 0 auto;
  max-width: 80%;
  border-top: 1px solid var(--card-border-color);
  margin-bottom: 2.4rem;
  border-radius: 12px;
}

.item__name {
  font-size: 1.8rem;
}

/* CARD INFO */

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--text-color);
  font-size: 2.4rem;
  text-align: center;
  background-color: var(--card-bg-color);
  padding: 2.4rem;
  border-radius: 12px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 10;
  overflow: auto;
  overflow-y: scroll;
}

.close-modal {
  position: absolute;
  top: 0rem;
  right: 0rem;
  cursor: pointer;
  width: 3.2rem;
  height: 3.2rem;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
}

.card__info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

img {
  max-width: 60%;
}

.item__info {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.item__info div {
  justify-self: start;
  text-align: left;
}

/* PAGES */
.pages {
  margin-top: 4.8rem;
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.page {
  background-color: var(--card-bg-color);
  border: 2px solid var(--card-border-color);
  border-radius: 50%;
  min-height: 3.4rem;
  min-width: 3.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

/* ADAPTIVE */

@media (max-width: 1440px) {
  main {
    max-width: 80rem;
  }

  .list__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;
  }
}

@media (max-width: 900px) {
  main {
    max-width: 60rem;
  }

  .list__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  main {
    max-width: 40rem;
  }

  .list__grid {
    grid-template-columns: 1fr;
  }

  .close-modal {
    width: 2.4rem;
    height: 2.4rem;
  }
}

@media (max-width: 450px) {
  main {
    max-width: 30rem;
  }

  .close-modal {
    width: 1.8rem;
    height: 1.8rem;
  }
}
</style>
