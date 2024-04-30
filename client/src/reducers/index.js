import { combineReducers } from '@reduxjs/toolkit';
import tattooReducer from '../features/about/reducers'
import tattooCategorties from '../features/categories/reducers'
import addTattoosItem from '../dashboard/features/tatt00Table/reducers'
import placementReducer from '../dashboard/features/bodyplacement/reducer'
import addCategories from '../dashboard/features/categories/reducer'
import tattooDetailsReducer from '../features/tattoos/reducer/index'
import tattooUpload from '../features/artistDetails/reducer'
import banner from '../features/home/reducerTattoos'
import fetchArtist from '../features/artist/reducer'
import comment from "../features/tattoos/reducer"
import tattooReducerCreate from "../features/uploadTattoo/reducer"
import userAndTattooReducer from "../dashboard/reducer"
import fetchCategoryReducer from "../dashboard/features/categories/reducer"
import categoryReducer from '../dashboard/features/categories/component/update/reducer';
import placementBodyReducer from '../dashboard/features/bodyplacement/component/update/reducer';
import adminTattoosReducer from "../dashboard/features/tatt00Table/reducers"
import adminReducer from "../dashboard/features/update/reducer"
import tattooReducer1 from "../dashboard/features/tatt00Table/reducers"
import googleLoginReducer from '../features/auth/googleReducer';
import authReducer from '../features/auth/reducers';
import messageReducer from '../features/contact/reducer';
import { businessFormReducer } from '../dashboard/features/business/reducer';
import { CustomerFormReducer } from '../features/customerBooking/reducer';
import priceReducer from "../features/tattoos/reducerPayment"
const reducers = {
   
    authReducer,
    Tattoos:adminTattoosReducer,
    adminReducer,
    googleLoginReducer,
    tattooDetails: tattooDetailsReducer,
    tattooUpload,
    tattooCategorties,
    tattooReducerCreate,
    userAndTattooReducer,
    fetchCategoryReducer,
    comment,
    banner,
    fetchArtist,
    tattooReducer,
    addTattoosItem,
    placementReducer,
    addCategories,
    tattooReducer1,
    category: categoryReducer,
    placement:placementBodyReducer,
    businessForm: businessFormReducer,
    customerForm: CustomerFormReducer,
    priceReducer,
    messageReducer,
};

export default combineReducers(reducers);
