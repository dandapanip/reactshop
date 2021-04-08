import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ProductFilter from '../ProductFilter/ProductFilter';

const ProductTabs = (props) => {
    return (
        <>
            <Tabs defaultActiveKey="latest" transition={false} id="noanim-tab-example">
                <Tab eventKey="latest" title="Latest" >
                    <ProductFilter/>
                </Tab>
                <Tab eventKey="new" title="New">
                    <p>For shame! deny that thou bear'st love to any, Who for thy self art so unprovident. Grant, if thou wilt, thou art belov'd of many, But that thou none lov'st is most evident: For thou art so possess'd with murderous hate, That 'gainst thy self thou stick'st not to conspire, Seeking that beauteous roof to ruinate Which to repair should be thy chief desire. O! change thy thought, that I may change my mind: Shall hate be fairer lodg'd than gentle love?</p>
                </Tab>
                <Tab eventKey="sale" title="Sale">
                    <p>Accuse me thus: that I have scanted all, Wherein I should your great deserts repay, Forgot upon your dearest love to call, Whereto all bonds do tie me day by day; That I have frequent been with unknown minds, And given to time your own dear-purchas'd right; That I have hoisted sail to all the winds Which should transport me farthest from your sight. Book both my wilfulness and errors down, And on just proof surmise, accumulate;</p>
                </Tab>
            </Tabs>
        </>
    )
}

export default ProductTabs;