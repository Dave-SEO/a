import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['components/demo'], resolve),
      // component: resolve => require(['views/Home'], resolve),
      children: [
        {
          path: '/MeetingAll',
          name: 'MeetingAll',
          component: resolve => require(['views/MeetingList/MeetingAll'], resolve)
        },
        {
          path: '/MeetingMy',
          name: 'MeetingMy',
          component: resolve => require(['views/MeetingList/MeetingMy'], resolve)
        },
        {
          path: '/MeetingCreate',
          name: 'MeetingCreate',
          component: resolve => require(['views/MeetingCreate/MeetingCreate'], resolve)
        }
      ]
    },
    {
      path: '/demo',
      name: 'demo',
      component: resolve => require(['components/demo'], resolve)
    }
  ]
})
