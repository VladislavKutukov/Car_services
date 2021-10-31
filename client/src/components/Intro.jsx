import React from 'react';
import logo from '../Icon/2.webp';

function Intro  ()  {
    return(
    <div>
        <section className="intro">
            <div className="container">
                <div className="intro__shell ">				
                    <div className="intro__item">					
                        <h2 className="intro__text">Ремонт двигателей отечественного <br></br> и иностранного производства
                            <br></br>  Капитальный ремонт деталей <br></br>  двигателя </h2>
                            
                        <button className="intro__button  btn--red" href="#" type="button">Оставить заявку</button>
                    </div>
                    <div className="intro__item">
                         <img src={logo} alt="logo" className="intro__icon"/> 
                    </div>
                </div>
                
            </div>
        </section>
        <section className="intro__footer">
            <div className="container">
                <div className="masters">
                        <div className="nav">
                            <a className = "master__nav"  >Наши мастера на связи</a>
                            <a className = "master__nav"  >1-234-567-89-12 Денис</a>
                            <a className = "master__nav"  >1-234-567-89-12 Михаил</a>
                            <a className = "master__nav"  >1-234-567-89-12 Владислав</a>
                            
                        </div>
                        <div className="master__icon">
                            icon
                        </div>
                </div>
            </div>
        </section>
   </div>
    );
};
export default Intro;

