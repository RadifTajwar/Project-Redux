import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from '../store/cartSlice';
import "./ProductCard.css";
export const ProductCard = ({product}) => {
  const {id,name, price, image} = product;
  const cartList=useSelector(state=>state.cartState.cartList);
  const [IsInCart, setIsInCart] = useState(false);
  useEffect(() => {
    const productCart = cartList.find(Element=>Element.id===id);
    if(productCart){
      setIsInCart(true);
    }
    else{
      setIsInCart(false);
    }
  }, [cartList])
  
  const dispatch = useDispatch();
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {IsInCart? <button style={{"backgroundColor":"red"}} onClick={()=>dispatch(remove(product))}>Remove</button>:<button onClick={()=>dispatch(add(product))}>Add To Cart</button>
        }
       
      </div>
    </div>
  )
}
