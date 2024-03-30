import Vue from 'vue'
import Router from 'vue-router'
import CarList from '../pages/CarList.vue'
import OptionList from '../pages/OptionList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/carList',
      name: 'CarList',
      component: CarList
    },
    {
      path: '/optionList',
      name: 'OptionList',
      component: OptionList
    }
  ],
  linkActiveClass: 'active'
})
