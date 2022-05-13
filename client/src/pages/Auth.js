import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
   
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
         
        } catch (e) {
           
        }

    }

    return (
        <><h6>{isLogin ? 'Авторизация' : "Регистрация"}</h6><div id="wrapper">
        <form id="signin" method="" action="" autocomplete="off">
            <input type="text" id="user" name="user" 
                        placeholder="Введите ваш email..."  
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
            <input type="password" id="pass" name="pass" placeholder="Введите ваш пароль..." 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
            <button type="submit" variant={"outline-success"}
                            onClick={click}>
                                &#xf0da;
                                </button>
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
        </form>
    </div></>
       
      
        
        
    );
});

export default Auth;