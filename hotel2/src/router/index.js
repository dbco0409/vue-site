import { createRouter, createWebHistory } from 'vue-router'

// 뷰 컴포넌트 import
import Main from '../views/Main.vue'
import HotelInfo from '../views/HotelInfo.vue'
import RoomInfo from '../views/RoomInfo.vue'
import Facilities from '../views/Facilities.vue'
import Events from '../views/Events.vue'

import MainEn from '../views/en/Main.vue'
import MainJp from '../views/jp/Main.vue'
import MainCh from '../views/ch/Main.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/hotel', component: HotelInfo },
  { path: '/rooms', component: RoomInfo },
  { path: '/facilities', component: Facilities },
  { path: '/events', component: Events },
  { path: '/', component: Main },
  { path: '/en', component: MainEn },
  { path: '/ch', component: MainCh },
  { path: '/jp', component: MainJp },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
