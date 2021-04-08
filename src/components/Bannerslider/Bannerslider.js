import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import axios from 'axios';
import { getMainSlider } from '../../redux/actions';
import store from '../../redux/store';

const Bannerslider = (props) => {

    const baseUrl = 'https://60656470f0919700177875bd.mockapi.io/api/v1/';

    const [slider, setSlider] = useState(0);

    useEffect(() => {
        if(!Array.isArray(slider) && slider == 0 && Array.isArray(store.getState().slider) && store.getState().slider.length == 0) {
            async function fetchData() {
                //console.log("Slider API Call Start");
                /*axios.get(baseUrl+'slider')
                    .then(response => {
                        setSlider(response.data)
                        if(Array.isArray(store.getState().slider) && store.getState().slider.length == 0) {
                            store.dispatch(getMainSlider(response.data));
                        }
                    });*/
                const res = await axios.get(baseUrl+'slider');
                if(res) {
                    setSlider(res.data)
                    if(Array.isArray(store.getState().slider) && store.getState().slider.length == 0) {
                        store.dispatch(getMainSlider(res.data))
                    }
                }
                //console.log("Slider API Call End");
            }
            fetchData();           
        } 
        
        if(Array.isArray(store.getState().slider) && store.getState().slider.length > 0) {
            setSlider(store.getState().slider[0])
        }
    },[slider]);

    /*function updateSlider(slider) {
        if(Array.isArray(store.getState().slider) && store.getState().slider.length == 0) {
            console.log("Slider Data Store");
            
        }        
    }*/

    return (
        <>
            <Container fluid className="main-banner-section">
                <Row>
                    <Col>
                        <Carousel>
                            {Array.isArray(slider) && slider != 0 && slider.map((slide) => 
                                <Carousel.Item interval={2000}>
                                    <img
                                    className="d-block w-100"
                                    src={slide.imagepath}
                                    alt={slide.title}
                                    key={slide.id}
                                    />
                                    <Carousel.Caption>
                                    <h3>{slide.title}</h3>
                                    <p>{slide.desc}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </Col>
                </Row>
            </Container>        
        </>
    )
}

export default Bannerslider;