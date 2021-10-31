import React from 'react';
import motor from '../Icon/motor.webp';
import motor2 from '../Icon/motor2.webp';

function Document  ()  {
    return(
    <div>
     <section className="document">
		<div className="container">
			<div className="document__inner">
				<div className="document__item">
					<div className="document__icon"><img src={motor} alt="motor" /></div>		
				</div>
				<div className="document__item">
					<div className="document__text"> 
						<h1> Производим Капитальный Ремонт</h1>
						<p > таких ДВС как: Cummins, КамАЗ, ЯМЗ, ММЗ, СМД, УМЗ, ЗМЗ</p>
						<p > Выполняем услуги по сборке Short-блоков и Long-блоков любых двигателей</p>
						<p > Производим ремонт отдельных деталей любых двигателей внутреннего сгорания:</p>
						
						<ul>
							<li> Головка блока цилиндров (ГБЦ) и её составляющие детали</li>
							<li>Блок цилиндров (БЦ) и его составляющие детали</li>
							<li>Коленчатый вал</li>
							<li> Шатуны</li>
						</ul>
						
					</div>
					<div className="document__text"> 
						<h1> Производим Капитальный Ремонт</h1>
						<p > таких ДВС как: Cummins, КамАЗ, ЯМЗ, ММЗ, СМД, УМЗ, ЗМЗ</p>
						<p > Выполняем услуги по сборке Short-блоков и Long-блоков любых двигателей</p>
						<p > Производим ремонт отдельных деталей любых двигателей внутреннего сгорания:</p>
						
						<ul>
							<li> Головка блока цилиндров (ГБЦ) и её составляющие детали</li>
							<li>Блок цилиндров (БЦ) и его составляющие детали</li>
							<li>Коленчатый вал</li>
							<li> Шатуны</li>
						</ul>
					</div>
				</div>
				<div className="document__item">
					<div className="document__text">
						<ul>
							<li>Профессиональное оборудование</li>
							<li>Гарантия на выполненные работы</li>
							<li>Опытные мастера</li>
							<li>Наличие запчастей на нашем складе</li>
							<li>Высокоточный подбор и заказ запчастей по низким ценам</li>
							<li>Выполнение исключительно согласованных с клиентом работ</li>
						</ul> 
					</div>			
				</div>
				<div className="document__item">
					<div className="document__icon"><img src={motor2} alt="motor2"/></div>			
				</div>
			</div>
		</div>
	</section>
   </div>
    );
};
export default Document;