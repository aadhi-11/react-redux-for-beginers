import { useSelector } from "react-redux"
const CakeView = () => {
   const numOfCake = useSelector((state) => state.cake.numOfCake)
    return (
        <div>
            <h2>Number of cakes -{numOfCake}</h2>
            <button>Order cake</button>
            <button>Restoke cakes</button>
        </div>
    )
}

export default CakeView