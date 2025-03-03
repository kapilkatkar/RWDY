import { useSelector } from "react-redux";
import {
  removeFromCart,
  increamentProducts,
  decreamentProducts,
} from "./Cart.Slice";
import { useDispatch } from "react-redux";
import "./MyCart.css";
import Headers from "../Headers";

const MyCart = () => {
  const cartList = useSelector((state) => state.myCart.data);
  const dispatch = useDispatch();

  const onRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const onIncreament = (id) => {
    dispatch(increamentProducts({ id }));
  };

  const onDecreament = (id) => {
    dispatch(decreamentProducts({ id }));
  };

  const totalPrice = (args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum += args[i];
    }
    return sum;
  };

  const itemTotalPrice = cartList.map((item) => {
    return Number(item.price) * Number(item.quantity);
  });

  const cartTotalPrice = totalPrice(itemTotalPrice);

  return (
    <div>
      <Headers></Headers>
      <div className="cart-container">
        <div className="cart-header">My cart</div>
        {cartList.length > 0 ? (
          cartList.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <span className="cart-item-title">{item.title}</span>
                <span className="cart-item-quantity">
                  Quantity: {item.quantity}
                </span>

                <div className="cart-item-buttons">
                  {item.quantity < 10 ? (
                    <button onClick={() => onIncreament(item.id)}>+</button>
                  ) : (
                    <button disabled>+</button>
                  )}
                  <button onClick={() => onDecreament(item.id)}>-</button>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    style={{ background: "Red" }}
                  >
                    Remove
                  </button>
                </div>
                <div className="cart-item-price">
                  {Number(item.price) * Number(item.quantity)}
                </div>
              </div>
            );
          })
        ) : (
          <p>No products available</p>
        )}
        <div className="total-price">Total Price: {cartTotalPrice}</div>
        <button>By Now</button>
      </div>
    </div>
  );
};

export default MyCart;
