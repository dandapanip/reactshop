import {GET_MAIN_SLIDER,GET_BANNERS,PRODUCT_FILTER} from '../constants/actionTypes'

export function getMainSlider(payload) {
    return { type: GET_MAIN_SLIDER, payload};
}

export function getBanner(payload) {
    return { type: GET_BANNERS, payload };
}

export function getProducts(payload) {
    return { type: PRODUCT_FILTER, payload };
}