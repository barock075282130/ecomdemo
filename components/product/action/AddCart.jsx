import { useCart } from "cart"

const AddCart = ({ productId, detail, price, image }) => {
  const { addToCart } = useCart()
  return (
    <button 
      className="w-full py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white duration-300 font-semibold"
      onClick={()=> addToCart({productId,detail,price, image})}
    >
      Add to cart
    </button>
  )
}

export default AddCart