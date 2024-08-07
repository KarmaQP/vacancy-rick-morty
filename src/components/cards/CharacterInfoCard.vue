<template>
  <div class="modal">
    <img :src="cardInfo.image" alt="Character's Photo" />
    <div class="line"></div>
    <ul class="card__character-info">
      <li class="item__info">
        <div>Name:</div>
        <div>{{ cardInfo.name }}</div>
      </li>
      <li class="item__info">
        <div>Status:</div>
        <div>{{ cardInfo.status }}</div>
      </li>
      <li class="item__info">
        <div>Species:</div>
        <div>{{ cardInfo.species }}</div>
      </li>
      <li class="item__info">
        <div>Gender:</div>
        <div>{{ cardInfo.gender }}</div>
      </li>
      <li class="item__info">
        <div>Origin:</div>
        <div>{{ cardInfo.origin.name }}</div>
      </li>
      <li class="item__info">
        <div>Location:</div>
        <div>{{ cardInfo.location.name }}</div>
      </li>
      <li class="item__info">
        <div>Created:</div>
        <div>{{ date }}</div>
      </li>
    </ul>
  </div>
  <div class="overlay" @click="toggleModalWindow"></div>
</template>

<script>
export default {
  props: {
    cardInfo: {
      type: Object,
      required: true,
    },
  },
  emits: ['toggle-modal-window'],
  computed: {
    date() {
      let date = new Date(this.cardInfo.created);
      date = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
      return date;
    },
  },
  methods: {
    toggleModalWindow() {
      this.$emit('toggle-modal-window');
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 40rem;
  min-width: 40rem;
  color: var(--text-color);
  font-size: 2.4rem;
  text-align: center;
  background-color: var(--card-bg-color);
  padding: 2.4rem;
  border-radius: 12px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 5;
}

.card__character-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

img {
  max-width: 60%;
}

.item__info {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.item__info div {
  justify-self: start;
  text-align: left;
}
</style>
