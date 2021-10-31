import React from 'react';
import icon from '../Icon/2.png';

function Features  ()  {
    return(
    <div>
        <section className="features">
        <div className="container">
                <section className="features__block page__section_1">
                        <div className="features__item">
                            <img src={icon} alt="icon" className="features__icon"/>
                                <h4 className="features__title">
                                    Title
                                </h4>
                            <div className="featureas__text">Text</div>
                        </div>
                        <div className="features__item">
                             <img src={icon} alt="icon" className="features__icon"/>
                                <h4 className="features__title">
                                    Title
                                </h4>
                            <div className="featureas__text">Text</div>	
                        </div>
                        <div className="features__item">
                              <img src={icon} alt="icon" className="features__icon"/>
                                <h4 className="features__title">
                                    Title
                                </h4>
                            <div className="featureas__text">123</div>
                        </div>
                        <div className="features__item">
                             <img src={icon} alt="icon" className="features__icon"/> 
                                <h4 className="features__title">
                                    Title
                                </h4>
                            <div className="featureas__text">Text</div>						
                        </div>
                        <div className="features__item">
                            <img src={icon} alt="icon" className="features__icon"/> 
                                <h4 className="features__title">
                                    Title
                                </h4>
                            <div className="featureas__text">Text</div>						
                        </div>
                        <div className="features__item">
                             <img src={icon} alt="icon" className="features__icon"/>
                                <h4 className="features__title">
                                    Title
                                </h4>
                            <div className="featureas__text">Text</div>						
                        </div>
                </section>
        </div>
     </section>
   </div>
    );
};
export default Features;
