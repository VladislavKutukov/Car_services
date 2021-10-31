import React from 'react';
import logo from '../Icon/logo.webp';

function Headers  ()  {
    return(
        <header className = "headers">
		<div className = "container">
			<div className = "header__inner">
				<div className = "header__logo">
					 <img src={logo} alt="logo" />
				</div>
				
				<div className = "nav">
					<li><a data-goto=".page__section_1"  href="#" className = "nav__link" >Главная</a> </li>
					<li><a data-goto=".page__section_2"   href="#" className = "nav__link">Услуги</a></li>
					<li><a data-goto=""  class = "nav__link" href="#" >Галерея</a></li>
					
				</div>
				<button className="intro__button  btn--red" href="#" type="button">Оставить заявку</button>
				<div className="nav">
					<a className = "nav__link" href="#" >1-234-567-89-12</a>
					<a className = "nav__link" href="#" >Kutukov@.ru</a>
				
				</div>
				<div className="menu__icon">
					<span></span>
				</div>
			</div>
		</div>	
	</header>
    );
};
export default Headers;