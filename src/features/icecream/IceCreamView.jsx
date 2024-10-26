import { useSelector,useDispatch } from "react-redux"
import {ordered,restocked} from './iceCreamSlice'
const IceCreamView = () => {
  const dispatch = useDispatch();
  const numOfIcecream = useSelector((state)=>state.iceCream.numOfIceCream)
  return (
    <div>    
    <h2>Number of Ice creams - {numOfIcecream}</h2>
    <button onClick={()=>dispatch(ordered())} >Order Ice creams</button>
    <button onClick={()=>dispatch(restocked(30))} >Restoke Ice creams</button>
</div>
  )
}

export default IceCreamView