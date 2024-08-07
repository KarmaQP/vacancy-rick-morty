<template>
  <div class="modal">
    <ul class="card__location-info">
      <li class="item__info">
        <div><b>Name:</b></div>
        <div>{{ cardInfo.name }}</div>
      </li>
      <li class="item__info">
        <div><b>Dimension:</b></div>
        <div>{{ cardInfo.dimension }}</div>
      </li>
      <li class="item__info">
        <div><b>Type:</b></div>
        <div>{{ cardInfo.type }}</div>
      </li>
      <li class="item__info">
        <div><b>Residents:</b></div>
        <div>
          <div v-for="name in residentsNames" :key="name">
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
      residentsNames: [],
    };
  },
  created() {
    // const that = this;
    // this.cardInfo.residents.forEach(function (residentUrl) {
    //   that.loadCharactersNames(residentUrl);
    // });
    this.loadCharactersNames();
  },
  methods: {
    toggleModalWindow() {
      this.$emit('toggle-modal-window');
    },
    async loadCharactersNames() {
      let residentsIds = '';
      this.cardInfo.residents.forEach((residentUrl) => {
        residentsIds += `${residentUrl.substring(42)},`;
      });
      // removing last ',' for request
      residentsIds = residentsIds.substring(0, residentsIds.length - 1);

      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${residentsIds}`
      );

      if (!response.ok) return;

      const data = await response.json();

      const that = this;
      // more than one resident
      if (data.length > 0) {
        data.forEach((resident) => {
          that.residentsNames.push(resident.name);
        });
        // one resident
      } else if (data.name) {
        that.residentsNames.push(data.name);
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
