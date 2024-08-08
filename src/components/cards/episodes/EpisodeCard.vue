<template>
  <li class="item__card" @click="toggleModalWindow">
    <div class="card">
      <ul class="card__episode-info">
        <li>{{ episode }}</li>
        <li class="card__name">{{ name }}</li>
        <li>{{ date }}</li>
      </ul>
    </div>
  </li>
  <episode-info-card
    v-if="isModalVisible"
    :card-info="cardInfo"
    @toggle-modal-window="toggleModalWindow"
  ></episode-info-card>
</template>

<script>
import EpisodeInfoCard from './EpisodeInfoCard.vue';

export default {
  components: { EpisodeInfoCard },
  props: {
    episodeId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    episode: {
      type: String,
      required: true,
    },
    date: {
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
        `https://rickandmortyapi.com/api/episode/${this.episodeId}`
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
  min-height: 19rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__info {
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
