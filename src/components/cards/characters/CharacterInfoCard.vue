<template>
  <div class="modal">
    <div class="close-modal" @click="toggleModalWindow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path
          fill="#fcfcfc"
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
    </div>
    <img :src="cardInfo.image" alt="Character's Photo" />
    <div class="line"></div>
    <ul class="card__info">
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
  max-width: 40rem;
  min-width: 40rem;
  overflow-y: auto;
}

/* ADAPTIVE */

@media (max-width: 680px) {
  .modal {
    max-width: 30rem;
    min-width: 30rem;
    font-size: 2rem;
  }
}

@media (max-width: 450px) {
  .modal {
    max-width: 24rem;
    min-width: 24rem;
    font-size: 1.8rem;
  }
}
</style>
