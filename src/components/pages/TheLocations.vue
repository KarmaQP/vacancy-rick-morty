<template>
  <section class="locations">
    <ul class="list__grid">
      <LocationCard
        v-for="locationInfo in pageInfo"
        v-bind:key="locationInfo.id"
        :name="locationInfo.name"
        :location-type="locationInfo.type"
      ></LocationCard>
    </ul>
  </section>
</template>

<script>
import LocationCard from '../cards/LocationCard.vue';

export default {
  components: { LocationCard },
  data() {
    return {
      pageInfo: null,
    };
  },
  async beforeMount() {
    const response = await fetch(
      'https://rickandmortyapi.com/api/location?page=1'
    );

    if (!response.ok) return;

    const json = await response.json();
    this.pageInfo = json.results;
    console.log(this.pageInfo);
  },
};
</script>
