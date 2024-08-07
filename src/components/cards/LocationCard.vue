<template>
  <li class="item__card">
    <div class="card">
      <ul class="card__location-info">
        <li class="card__name">{{ name }}</li>
        <li>{{ locationType }}</li>
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
    locationType: {
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
