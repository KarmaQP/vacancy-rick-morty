<template>
  <section class="episodes">
    <ul class="list__grid">
      <EpisodeCard
        v-for="episodeInfo in pageInfo"
        v-bind:key="episodeInfo.id"
        :name="episodeInfo.name"
        :episode="episodeInfo.episode"
        :date="episodeInfo.air_date"
      ></EpisodeCard>
    </ul>
  </section>
</template>

<script>
import EpisodeCard from '../cards/EpisodeCard.vue';

export default {
  components: { EpisodeCard },
  data() {
    return {
      pageInfo: null,
    };
  },
  async beforeMount() {
    const response = await fetch(
      'https://rickandmortyapi.com/api/episode?page=1'
    );

    if (!response.ok) return;

    const json = await response.json();
    this.pageInfo = json.results;
    console.log(this.pageInfo);
  },
};
</script>
