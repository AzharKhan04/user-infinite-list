import Welcome from "./Welcome";
import Login from './Login';

const privateRoutes:any[] =  [
    {
        path:'/home',
        component:<Welcome/>

    }
]

const publicRoutes: any[] = [
    {
        path:'/login',
        component:<Login/>

    },
    {
        path:'/',
        component:<Login/>

    }
]

const routes = {
    privateRoutes:privateRoutes,
    publicRoutes:publicRoutes
}

export default routes;