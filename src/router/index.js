import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue"
import MuonSach from "../views/MuonSach.vue"
import TraSach from "../views/TraSach.vue"
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/muonsach',
    name: 'MuonSach',
    component: MuonSach,
  },
  {
    path: '/trasach',
    name: 'TraSach',
    component: TraSach,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
