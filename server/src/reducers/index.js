import { combineReducers } from 'redux';

import profileData from '../features/home/reducers';
import profileDetails from '../features/about/reducers'
import profileCategories from '../features/categories/reducers'
import artistDetails from '../features/artist_Details/reducer'
import user_follower from '../features/follower/reducer'
// import sessionData from '../features/authentication/reducers';
// import invoiceData from '../features/invoices/reducers';
// import invitemData from '../features/invoice_items/reducers';

// const reducers = {
//   sessionData,
//   invoiceData,
//   invitemData
// };

const reducers = {
    profileData,
    profileDetails,
    profileCategories,
    artistDetails,
    user_follower

  
    
};
  


export default combineReducers(reducers)