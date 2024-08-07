<template>
  <li class="item__card" @click="toggleModalWindow">
    <div class="card">
      <ul class="card__location-info">
        <li class="card__name">{{ name }}</li>
        <li>{{ locationType }}</li>
      </ul>
    </div>
  </li>
  <location-info-card
    v-if="isModalVisible"
    :card-info="cardInfo"
    @toggle-modal-window="toggleModalWindow"
  ></location-info-card>
</template>

<script>
import LocationInfoCard from './LocationInfoCard.vue';

export default {
  components: { LocationInfoCard },
  props: {
    locationId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    locationType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isModalVisible: false,
      cardInfo: null,
    };
  },
  beforeMount() {
    this.loadCardInfo();
  },
  methods: {
    toggleModalWindow() {
      this.isModalVisible = !this.isModalVisible;
    },
    async loadCardInfo() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/location/${this.locationId}`
      );

      if (!response.ok) return;

      const json = await response.json();
      this.cardInfo = json;
    },
  },
};
</script>

<style scoped>
.item__card {
  transition: transform 0.3s ease;
  cursor: pointer;
}

.item__card:hover {
  transform: translateY(-10px);
}

.card {
  border: 1px solid var(--card-border-color);
  border-radius: 24px;
  overflow: hidden;
  text-align: center;
  padding: 2.4rem;
  background-color: var(--card-bg-color);
  min-height: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__location-info {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

li {
  font-size: 1.6rem;
  color: var(--gray-text-color);
}

.card__name {
  font-size: 2.4rem;
  color: var(--text-color);
}
</style>
