import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue"
import MuonSach from "../views/MuonSach.vue"
import TraSach from "../views/TraSach.vue"
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import NotFound from '@/views/NotFound.vue';
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
  {
    path:'/:pathMatch(.*)*',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next)=>{
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  const isLoginPage = to.path === "/login"
  const isRegisterLinkClicked = from.path === '/login' && to.path === '/register';
  if(!isAuthenticated && !isLoginPage && !isRegisterLinkClicked){
    localStorage.setItem('redirectPath', to.path)
    next('/login')
  }else{
    next()
  }
})

export default router;
