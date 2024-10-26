import { useSelector,useDispatch } from "react-redux"
import {ordered,restocked} from './iceCreamSlice'
import { useState } from "react";
const IceCreamView = () => {
  const dispatch = useDispatch();
  const [value,setValue] = useState(0)
  const numOfIcecream = useSelector((state)=>state.iceCream.numOfIceCream)
  return (
    <div>    
    <h2>Number of Ice creams - {numOfIcecream}</h2>
    <button onClick={()=>dispatch(ordered())} >Order Ice creams</button>
    <input type="number" value={value} onChange={(e)=>setValue(Number.parseInt(e.target.value))} />
    <button onClick={()=>dispatch(restocked(value))} >Restoke Ice creams</button>
</div>
  )
}

export default IceCreamView