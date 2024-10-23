// const { cakeActions } = require('../cake/cakeSlice')
import {ordered as cakeOrdered} from '../cake/cakeSlice'
import {createSlice}  from '@reduxjs/toolkit'

const initialState = {
    numOfIceCream : 20
}

const iceCreamSlice = createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIceCream--
        },
        restocked:(state,actions)=>{
            state.numOfIceCream+=actions.payload
        }
    },
    extraReducers:(builder) => {
        builder.addCase(cakeOrdered,(state) => {
            state.numOfIceCream--
        });
    },
})
export default iceCreamSlice.reducer
export const {ordered,restocked} = iceCreamSlice.actions