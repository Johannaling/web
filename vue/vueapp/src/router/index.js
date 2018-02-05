import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/components/book/Book'
import Movie from '@/components/movie/Movie'
import Music from '@/components/music/Music'
import Photo from '@/components/photo/Photo'
import MovieDetail from '@/components/movie/Moviedetail'
import Musicalbum from '@/components/music/Musicalbum'
import PhotoDetail from '@/components/photo/PhotoDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/book',
      name: 'book',
      component: Book,
      beforeEnter(to,from,next){
        from.name===null?next('/'):next()
      }
    },{
      path:'/',
      name:'movie',
      component: Movie
    },{
      path:'/music',
      name:'music',
      component: Music,
      beforeEnter(to,from,next){
        from.name===null?next('/'):next()
      }
    },{
      path: '/photo',
      name: 'photo',
      component: Photo,
      beforeEnter(to,from,next){
        from.name===null?next('/'):next()
      }
    },{
      path: '/moviedetail/:movieId',
      name: 'moviedetail',
      component: MovieDetail
    },{
      path:'/musicalbum/:musicId',
      component: Musicalbum
    },{
      path:'/photodetail/:index',
      component: PhotoDetail
    }

  ]
})
