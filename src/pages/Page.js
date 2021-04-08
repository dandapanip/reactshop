import React from 'react';
import Layout from '../layouts/Layout';
import {Container, Row, Col, Nav} from 'react-bootstrap';

const Page = (props) => {
    let urlPath = props.match.params.pid;
    return (<>
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <h2>CMS Pages - {urlPath}</h2>
                        <p>Welcome to Content page</p>
                    </Col>
                </Row>
            </Container>            
        </Layout>
        </>)

}

export default Page;