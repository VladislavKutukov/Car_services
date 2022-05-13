import React, {useContext} from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = () =>{
    
    const{user} = useContext(Context)

    console.log(user)
    return(
        <Routes>
            {user.isAuth && authRoutes.map(({path,Element}) =>
                <Route key={path} path={path} element = {Element} exact />
            )}
             { publicRoutes.map(({path,Element}) =>
                <Route key={path} path={path} element = {Element} exact />
            )}
            
        </Routes>
    );
};
export default AppRouter;