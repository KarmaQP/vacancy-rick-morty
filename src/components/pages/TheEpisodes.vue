<template>
  <section class="episodes">
    <ul class="list__grid">
      <episode-card
        v-for="episodeInfo in pageInfo"
        :key="episodeInfo.id"
        :episode-id="episodeInfo.id"
        :name="episodeInfo.name"
        :episode="episodeInfo.episode"
        :date="episodeInfo.air_date"
      ></episode-card>
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
import EpisodeCard from '../cards/episodes/EpisodeCard.vue';

export default {
  components: { EpisodeCard },
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
        `https://rickandmortyapi.com/api/episode/?page=${numPage}`
      );

      if (!response.ok) return;

      const json = await response.json();
      this.pageInfo = json.results;
      return json.info.pages;
    },
  },
};
</script>
