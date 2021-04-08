import React, {useEffect, useState} from 'react';
import Layout from '../layouts/Layout';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import Bannerslider from '../components/Bannerslider/Bannerslider';
import Banner from '../components/Banner/Banner';
import ProductTabs from '../components/ProductTabs/ProductTabs';
import axios from 'axios';
import { getBanner } from '../redux/actions';
import store from '../redux/store';

const HomePage = () => {

    const baseUrl = 'https://60656470f0919700177875bd.mockapi.io/api/v1/';

    const [banners, setBanners] = useState(0);

    useEffect(() => {
        if(!Array.isArray(banners) && banners == 0 && Array.isArray(store.getState().banners) && store.getState().banners.length == 0) {
            async function fetchData() {
                const res = await axios.get(baseUrl+'promobanners');
                //axios.get(baseUrl+'promobanners').then(response => setBanners(response.data));
                if(res) {
                    setBanners(res.data)
                    if(Array.isArray(store.getState().banners) && store.getState().banners.length == 0) {
                        store.dispatch(getBanner(res.data))
                    }
                }
            }
            fetchData();           
        }
        if(Array.isArray(store.getState().banners) && store.getState().banners.length > 0) {
            setBanners(store.getState().banners[0])
        }        
    },[banners]);

    return (
        <Layout>
            <Bannerslider/>
            <Container className="common-margin-top">
                <Row>
                    {Array.isArray(banners) && banners.slice(0,4).map((banner) => 
                        <Col key={banner.id}><Banner bannerTitle={banner.title} bannerButton="Shop Now" bannerLink={banner.url}/></Col>
                    )}
                </Row>
            </Container>
            <Container className="common-margin-top">
                <Row>
                    <Col>
                        <ProductTabs/>
                    </Col>
                </Row>
            </Container>        
        </Layout>
    )
}

export default HomePage;