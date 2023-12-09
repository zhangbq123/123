

export default [
    {
        path:'/',
        redirect:'/index'
    },
    {
        path:"/login",
        component:()=>import("@/views/login/index.vue")
    },
    {
        path:'/music',
        component:()=>import("@/views/index/child/MineMusic.vue")
    },
    {
        path:'/musics',
        component:()=>import("@/components/musics.vue")
    },
    {
        path:'/musicss',
        component:()=>import("@/components/suspension.vue")
    },
    {
        path:'/index',
        component:()=>import("@/views/index/index.vue")
    },
    {
        path:'/love',
        component:()=> import("@/views/love/love.vue")
    },
    {
        path:'/mine',
        component:()=> import("@/views/mine/mine.vue")
    },
    {
        path:'/ranking',
        component:()=> import("@/views/ranking/ranking.vue")
    },
    {
        path:'/mv',
        component:()=> import("@/views/ranking/child/mv.vue")
    },
    {
        path:'/community',
        component:()=> import("@/views/community/community.vue")
    },
   
]