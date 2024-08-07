<template>
  <section class="characters">
    <ul class="list__grid">
      <CharacterCard
        v-for="characterInfo in pageInfo"
        v-bind:key="characterInfo.id"
        :characterId="characterInfo.id"
        :name="characterInfo.name"
        :imageUrl="characterInfo.image"
      ></CharacterCard>
    </ul>
  </section>
</template>

<script>
import CharacterCard from '../cards/CharacterCard.vue';

export default {
  components: { CharacterCard },
  data() {
    return {
      pageInfo: null,
    };
  },
  async beforeMount() {
    const response = await fetch(
      'https://rickandmortyapi.com/api/character?page=1'
    );

    if (!response.ok) return;

    const json = await response.json();
    this.pageInfo = json.results;
  },
};
</script>
