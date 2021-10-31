import React from 'react';
import motor1 from '../Icon/motor1.jpg';
import motor2 from '../Icon/motor2.jpg';
import motor3 from '../Icon/motor3.jpg';
import motor4 from '../Icon/motor4.jpg';
import motor5 from '../Icon/motor5.jpg';
import motor6 from '../Icon/motor6.jpg';

function Works  ()  {
    return(
    <div>
      <section className="works__shell">
	<div className="container">
		<h1 className="works__secion__title">Наши услуги</h1>
		<div className="works">
				<div className="works__item">
					<img  className="works__photo" src={motor2} alt="motor2"/>
					<div className="works__content">
						<div className="works__title">Капитальный<br/> ремонт ДВС</div>
						
						<button className="works__button  btn--white"  href="DVS.html" type="button">Подробнее</button>
					</div>
				</div>
				<div className="works__item">
					<img  className="works__photo" src={motor1} alt="motor1"/>
					<div className="works__content">
						<div className="works__title">Ремонт коленчатых <br/> валов </div>
						<button className="works__button  btn--white" href="#" type="button">Подробнее</button>
					</div>
				</div>
				<div className="works__item">
					<img  className="works__photo" src={motor3} alt="motor3"/>
					<div className="works__content">
						<div className="works__title">Ремонт головки блока цилиндров (ГБЦ)</div>
						<button className="works__button  btn--white" href="#" type="button">Подробнее</button>
					</div>
				</div>
				<div className="works__item">
					<img  className="works__photo" src={motor4}alt="motor4"/>
					<div className="works__content">
						<div className="works__title">Опрессовывание ГБЦ и БЦ</div>
						<button className="works__button  btn--white" href="#" type="button">Подробнее</button>
					</div>
			</div>
			<div className="works__item">
				<img  className="works__photo" src={motor5} alt="motor5"/>
				<div className="works__content">
					<div className="works__title">Ремонт шатунов <br/> двигателя <br/></div>
					<button className="works__button  btn--white" href="#" type="button">Подробнее</button>
				</div>
			</div>
			<div className="works__item">
				<img  className="works__photo" src={motor6} alt="motor6"/>
				<div className="works__content">
					<div className="works__title">Ремонт постелей колен. вала и распред. вала</div>
					<button className="works__button  btn--white" href="#" type="button">Подробнее</button>
				</div>
			</div>			
		</div>
	</div>
</section>
   </div>
    );
};
export default Works;