import React from 'react';

import {useNavigate} from "react-router-dom"

const DeviceItem = ({device}) => {
   const history = useNavigate()
    return(
        
        <section className="features"  >
        <div className="container">
                <section className="features__block page__section_1">
                        <div className="features__item">
                            <img src={process.env.REACT_APP_API_URL + device.img} alt="icon" className="features__icon"/>
                                <h4 className="features__title">
                                {device.name}
                                </h4>
                            <div className="featureas__text">{device.price}</div>
                        </div>                       
                </section>
                
        </div>
     </section>
  
    );
};
export default DeviceItem;