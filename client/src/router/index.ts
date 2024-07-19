import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes :Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'dashboard',
        component: ()=>import("@/layouts/dashboard-layout/dashboardLayout.vue"),
        children:[
            {
                path:'/Company',
                name:'Company',
                component:()=>import("@/components/Company/company.vue")
            }, 
            {
                path:'/Models',
                name:'Models',
                component:()=>import("@/components/Models/models.vue"),
            },  
            {
                path:'/AddModel',
                name:'AddModel',
                component:()=>import("@/components/AddModel/addModel.vue"),
            },
            {
                path:'/Account',
                name:'Account',
                component:()=>import("@/components/Account/Account.vue"),
            },
        ]

    }
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
    
  })
  
  export default router
  