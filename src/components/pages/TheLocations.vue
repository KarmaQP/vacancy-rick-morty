<template>
  <section class="locations">
    <ul class="list__grid">
      <LocationCard
        v-for="locationInfo in pageInfo"
        :key="locationInfo.id"
        :location-id="locationInfo.id"
        :name="locationInfo.name"
        :location-type="locationInfo.type"
      ></LocationCard>
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
import LocationCard from '../cards/locations/LocationCard.vue';

export default {
  components: { LocationCard },
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
        `https://rickandmortyapi.com/api/location/?page=${numPage}`
      );

      if (!response.ok) return;

      const json = await response.json();
      this.pageInfo = json.results;
      return json.info.pages;
    },
  },
};
</script>
