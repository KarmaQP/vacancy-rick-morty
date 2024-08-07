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
  margin: 6.4rem auto;
}

.list__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 3.2rem;
}

/* Card */
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
</style>
