import { useSelector,useDispatch } from "react-redux"
import {ordered,restocked} from './cakeSlice'
import { useState } from "react"
const CakeView = () => {
    const [value,setValue]=useState(0)
   const numOfCake = useSelector((state) => state.cake.numOfCake)
   const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cakes -{numOfCake}</h2>
            <button onClick={()=>dispatch(ordered())} >Order cake</button>
            <input type="number"  value={value} onChange={(e)=>setValue(Number.parseInt(e.target.value))}/>
            <button onClick={()=>dispatch(restocked(value))} >Restoke cakes</button>
        </div>
    )
}

export default CakeView