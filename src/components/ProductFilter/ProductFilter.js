import React, {useEffect, useState} from 'react';
import { Card, Button} from 'react-bootstrap';
import axios from 'axios';
import { getProducts } from '../../redux/actions';
import store from '../../redux/store';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ProductFilter = (props) => {

    const baseUrl = 'https://60656470f0919700177875bd.mockapi.io/api/v1/';

    const [products, setProducts] = useState(0);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    useEffect(() => {
        if(!Array.isArray(products) && products == 0 && Array.isArray(store.getState().products) && store.getState().products.length == 0) {
            async function fetchData() {
                const res = await axios.get(baseUrl+'products');
                //axios.get(baseUrl+'promobanners').then(response => setBanners(response.data));
                if(res) {
                    setProducts(res.data)
                    if(Array.isArray(store.getState().products) && store.getState().products.length == 0) {
                        store.dispatch(getProducts(res.data))
                    }
                }
            }
            fetchData();           
        }
        if(Array.isArray(store.getState().products) && store.getState().products.length > 0) {
            setProducts(store.getState().products[0])
        }
    },[products]);

    return (
        <>
            <div className="product-filter-section">
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    >
                    {Array.isArray(products) && products != 0 && products.filter(products => products.isFeature == "1").map((item,i) => 
                        <div key={item.id}>
                            <Card>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.desc}</Card.Text>
                                    <Card.Text>{item.price}</Card.Text>
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </Carousel>
            </div>            
        </>
    )
}

export default ProductFilter;