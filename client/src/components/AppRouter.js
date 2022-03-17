import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () =>{
    const isAuth =false
    return(
        <Routes>
            {isAuth && authRoutes.map(({path,Element}) =>
                <Route key={path} path={path} element = {Element} exact />
            )}
             { publicRoutes.map(({path,Element}) =>
                <Route key={path} path={path} element = {Element} exact />
            )}
        </Routes>
    );
};
export default AppRouter;