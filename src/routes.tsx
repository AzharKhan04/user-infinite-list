import Login from './Login';
import Dashboard from './Dashboard';

const privateRoutes:any[] =  [
    {
        path:'/home',
        component:<Dashboard/>

    },
    {
        path:'/',
        component:<Dashboard/>

    }
]

const publicRoutes: any[] = [
    {
        path:'/login',
        component:<Login/>

    }
    
]

const routes = {
    privateRoutes:privateRoutes,
    publicRoutes:publicRoutes
}

export default routes;