/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'

import router from './router';

const app = createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app');
