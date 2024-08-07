<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/characters">Characters</router-link>
        </li>
        <li>
          <router-link to="/episodes">Episodes</router-link>
        </li>
        <li>
          <router-link to="/locations">Locations</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: var(--nav-bg-color);
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.active {
  color: var(--nav-tab-text-hover-color);
  border-color: var(--nav-tab-text-hover-color);
  background-color: var(--nav-tab-bg-hover-color);
  border-radius: 24px;
}
</style>
