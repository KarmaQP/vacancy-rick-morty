<template>
  <div class="modal">
    <ul class="card__episode-info">
      <li class="item__info">
        <div><b>Episode:</b></div>
        <div>{{ cardInfo.episode }}</div>
      </li>
      <li class="item__info">
        <div><b>Name:</b></div>
        <div>{{ cardInfo.name }}</div>
      </li>
      <li class="item__info">
        <div><b>Air Date:</b></div>
        <div>{{ cardInfo.air_date }}</div>
      </li>
      <li class="item__info">
        <div><b>Characters:</b></div>
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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 60rem;
  min-width: 60rem;
  max-height: 50rem;
  min-height: 20rem;
  color: var(--text-color);
  font-size: 2.4rem;
  text-align: center;
  background-color: var(--card-bg-color);
  padding: 2.4rem;
  border-radius: 12px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 10;
  overflow-y: scroll;
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

.card__episode-info {
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
