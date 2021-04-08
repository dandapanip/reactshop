import { GET_BANNERS, GET_MAIN_SLIDER, PRODUCT_FILTER } from '../../constants/actionTypes'

const initialState = {
    slider: [],
    banners: [],
    products: []
};

function rootReducer(state = initialState, action) {
    if(action.type == GET_MAIN_SLIDER) {
        state.slider.push(action.payload);
    }
    if(action.type == GET_BANNERS) {
        state.banners.push(action.payload);
    }
    if(action.type == PRODUCT_FILTER) {
        state.products.push(action.payload);
    }
    return state;
};

export default rootReducer;