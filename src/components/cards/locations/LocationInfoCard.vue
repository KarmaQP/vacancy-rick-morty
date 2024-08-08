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
