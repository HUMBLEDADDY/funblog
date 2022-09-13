import Home from '../pages/Home/Home'
import Main from '../pages/Main/Main'
import Date from '../pages/Date/Date'
import Article from '../pages/Article/Article'
import Category from '../pages/Category/Category'


import { useRoutes } from 'react-router-dom';

const routesConfig = [
    {
        path:'/', 
        element: <Home/>,
        children:[
            {
                path:'/',
                element: <Main/>
            },
            {
                path:'/date',
                element: <Date/>
            },
            {
                path:'/category',
                element: <Category/>
            },
            {
                path:'/article/',
                element: <Article/>
            }
        ]
    }

]

const GetRoutes = () => {
    const routes = useRoutes(routesConfig)
    return routes
}

export default GetRoutes