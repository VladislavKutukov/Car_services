import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices} from "../http/deviceAPI";
import BrandBar from "../components/BrandBar";
import DevicesList from '../components/DevicesList';
const Shop = observer( () =>{
    const {device} = useContext(Context)

    useEffect(() => {
       
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data))
            
     
    }, [])
  return(
        <Container>
            <Row className="mt-2">
                
                <Col md={9}>
                    <BrandBar/>
                    <DevicesList/>
                </Col>
            </Row>
        </Container>
    );
});
export default Shop;
