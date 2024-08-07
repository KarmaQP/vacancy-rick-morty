<template>
  <li class="item__card">
    <div class="card">
      <ul class="card__episode-info">
        <li>{{ episode }}</li>
        <li class="card__name">{{ name }}</li>
        <li>{{ date }}</li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: {
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

.card__episode-info {
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
