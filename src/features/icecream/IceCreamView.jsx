import { useSelector } from "react-redux"
const IceCreamView = () => {
  const numOfIcecream = useSelector((state)=>state.iceCream.numOfIceCream)
  return (
    <div>    
    <h2>Number of Ice creams - {numOfIcecream}</h2>
    <button>Order Ice creams</button>
    <button>Restoke Ice creams</button>
</div>
  )
}

export default IceCreamView