import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExplainView from '../views/ExplainView.vue'
// import NewsView from '../views/NewsView.vue'
import ProductsView from '../views/ProductsView.vue'
import PublicationsView from '../views/PublicationsView.vue'
import ReviewsView from '../views/ReviewsView.vue'
import TeamView from '../views/TeamView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/explain',
      name: 'explain',
      component: ExplainView
      // component: () => import('../views/ExplainView.vue')

    },
    // {
    //   path: '/news',
    //   name: 'news',
    //   component: NewsView
    // },
    {
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/publications',
      name: 'publications',
      component: PublicationsView
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: ReviewsView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
