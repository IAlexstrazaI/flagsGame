import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import CountryTable from './views/CountryTable/CountryTable.vue'
import GameField from './views/GameField.vue'
import IndexPage from './views/IndexPage.vue'
const router = createRouter({
  routes: [
    {
      path: '/',
      component: IndexPage,
    },
    {
      path: '/countrytable/',
      component: CountryTable,
    },
    {
      path: '/gamefield/',
      component: GameField,
    },
  ],
  history: createWebHistory(),
})

const app = createApp(App)
app.use(router)
app.mount('#app')

//######################
//# FUNCTION AREA HERE #
//######################

function getLvlNumber() {
  let cookiesRaw = document.cookie

  console.log(cookiesRaw)
}

getLvlNumber()
