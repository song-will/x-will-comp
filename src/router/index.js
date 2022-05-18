const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/Home')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/components/About')
    }
]

export default routes