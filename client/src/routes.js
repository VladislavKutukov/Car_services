import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import CarPage from "./pages/CarPage"
import Main from "./pages/Main"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, SHOP_ROUTE,LOGIN_ROUTE, REGISTRATION_ROUTE,CAR_ROUTE, MAIN_ROUTE } from "./utils/consts"

export const authRoutes=[
    {
        path: ADMIN_ROUTE,
        Element:<Admin/>
    }
]

export const publicRoutes=[
    {
        path: MAIN_ROUTE,
        Element:<Main/>
    },
    {
        path: SHOP_ROUTE,
        Element:<Shop/>
    },
    {
        path: LOGIN_ROUTE,
        Element:<Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Element:<Auth/>
    },
    {
        path: CAR_ROUTE + '/:id',
        Element:<CarPage/>
    },
    {
        path: MAIN_ROUTE,
        Element:<Main/>
    }
]