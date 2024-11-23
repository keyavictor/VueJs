import { createRouter, createWebHistory } from 'vue-router';

// Import views
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Services from '@/pages/Services.vue';
import Contact from '@/pages/Contact.vue';

// Define routes
const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/about', component: About, name: 'about' },
  { path: '/services', component: Services, name: 'services' },
  { path: '/contact', component: Contact, name: 'contact' },
];

// Create and export router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
