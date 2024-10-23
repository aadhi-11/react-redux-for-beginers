import { configureStore as cofigureStore } from '@reduxjs/toolkit';
// import { createLogger } from 'redux-logger';

import userReducer from '../features/user/userSlice';
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/icecream/iceCreamSlice';

// const logger = createLogger()

const store = cofigureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        user:userReducer,
    },
    // middleware : (getDefaultMiddleWare)=>getDefaultMiddleWare().concat(logger),
})

export default store