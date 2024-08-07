<template>
  <li class="item__card" @click="toggleModalWindow">
    <div class="card">
      <img :src="imageUrl" alt="Character's Photo" />
      <div class="line"></div>
      <div class="card__character-name">
        <div class="item__name">
          <b>{{ name }}</b>
        </div>
      </div>
    </div>
  </li>
  <character-info-card
    v-if="isModalVisible"
    :card-info="cardInfo"
    @toggle-modal-window="toggleModalWindow"
  ></character-info-card>
</template>

<script>
import CharacterInfoCard from './CharacterInfoCard.vue';

export default {
  // name, imageUrl, gender, locationName, species, status
  components: { CharacterInfoCard },
  props: {
    characterId: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
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
        `https://rickandmortyapi.com/api/character/${this.characterId}`
      );

      if (!response.ok) return;

      const json = await response.json();
      this.cardInfo = json;
    },
  },
};
</script>

<style scoped></style>
