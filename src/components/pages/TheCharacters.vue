<template>
  <section class="characters">
    <ul class="list__grid">
      <CharacterCard
        v-for="characterInfo in pageInfo"
        :key="characterInfo.id"
        :characterId="characterInfo.id"
        :name="characterInfo.name"
        :imageUrl="characterInfo.image"
      ></CharacterCard>
    </ul>
    <div class="pages">
      <div
        class="page"
        v-for="numPage in numPages"
        :key="numPage"
        @click="loadNewPage(numPage)"
      >
        {{ numPage }}
      </div>
    </div>
  </section>
</template>

<script>
import CharacterCard from '../cards/characters/CharacterCard.vue';

export default {
  components: { CharacterCard },
  data() {
    return {
      pageInfo: null,
      numPages: null,
    };
  },
  async beforeMount() {
    this.numPages = await this.loadNewPage(1);
  },
  methods: {
    async loadNewPage(numPage) {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${numPage}`
      );

      if (!response.ok) return;

      const json = await response.json();
      this.pageInfo = json.results;
      return json.info.pages;
    },
  },
};
</script>
