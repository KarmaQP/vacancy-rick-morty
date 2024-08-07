import { createRouter, createWebHistory } from 'vue-router';

import TheCharacters from './components/pages/TheCharacters.vue';
import TheEpisodes from './components/pages/TheEpisodes.vue';
import TheLocations from './components/pages/TheLocations.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/characters' },
    {
      path: '/characters',
      component: TheCharacters,
    },
    {
      path: '/episodes',
      component: TheEpisodes,
    },
    {
      path: '/locations',
      component: TheLocations,
    },
    // { path: '/:notFound(.*)', component },
  ],
});

export default router;
