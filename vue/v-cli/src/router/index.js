import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import test1 from '@/components/test1'
import test2 from '@/components/test2'
import testUrl from '@/components/testUrl'
import error404 from '@/components/error404'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/test',
      name: 'test',
      component: test,
      children: [{
        path:'test1',
        name:'test1',
        component: test1,
        alias: '/abc'
      },{
        path: 'test2',
        name: '/test/test2',
        component: test2
    }]
    },{
      path: '/testUrl/:userId(\\d+)/:userName',
      name: 'testUrl',
      component: testUrl,
      beforeEnter(to, from, next){
        next()
    }
    },{
      path: '/home',
      redirect: '/'
    },{
      path: '/redirectparam/:userId(\\d+)/:userName',
      redirect: '/testurl/:userId(\\d+)/:userName'
    },{
      path: '*',
      component:error404
    }

  ]
})
