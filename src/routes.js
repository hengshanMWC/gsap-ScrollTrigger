import Index from './index.vue'
import A from './A.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: Index,
    name: 'index',
  },
  {
    path: '/A',
    component: A,
    name: 'A',
  },
]

export default routes

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach(async (to, from, next) => {
//   next()
// })

router.afterEach(() => {
  window.scrollTo(0, 0) // 切换路由之后滚动条始终在最顶部
})
