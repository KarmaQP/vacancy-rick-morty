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
    <ul class="card__info">
      <li class="item__info">
        <div>Episode:</div>
        <div>{{ cardInfo.episode }}</div>
      </li>
      <li class="item__info">
        <div>Name:</div>
        <div>{{ cardInfo.name }}</div>
      </li>
      <li class="item__info">
        <div>Air Date:</div>
        <div>{{ cardInfo.air_date }}</div>
      </li>
      <li class="item__info">
        <div>Characters:</div>
        <div>
          <div v-for="name in charactersNames" :key="name">
            {{ name }}
          </div>
        </div>
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
  data() {
    return {
      charactersNames: [],
    };
  },
  created() {
    this.loadCharactersNames();
  },
  methods: {
    toggleModalWindow() {
      this.$emit('toggle-modal-window');
    },
    async loadCharactersNames() {
      let charactersIds = '';
      this.cardInfo.characters.forEach((characterUrl) => {
        charactersIds += `${characterUrl.substring(42)},`;
      });
      // removing last ',' for request
      charactersIds = charactersIds.substring(0, charactersIds.length - 1);

      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${charactersIds}`
      );

      if (!response.ok) return;

      const data = await response.json();

      const that = this;
      // more than one character
      if (data.length > 0) {
        data.forEach((resident) => {
          that.charactersNames.push(resident.name);
        });
        // one character
      } else if (data.name) {
        that.charactersNames.push(data.name);
      }
    },
  },
};
</script>

<style scoped>
.modal {
  max-width: 60rem;
  min-width: 60rem;
  max-height: 50rem;
  min-height: 20rem;
}

/* ADAPTIVE */

@media (max-width: 680px) {
  .modal {
    max-width: 30rem;
    min-width: 30rem;
    font-size: 1.8rem;
  }
}

@media (max-width: 450px) {
  .modal {
    max-width: 24rem;
    min-width: 24rem;
    font-size: 1.6rem;
  }
}
</style>
