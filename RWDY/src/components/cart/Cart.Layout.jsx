import { useSelector } from "react-redux";
import {
  removeFromCart,
  increamentProducts,
  decreamentProducts,
} from "./Cart.Slice";
import { useDispatch } from "react-redux";

const MyCart = () => {
  const cartList = useSelector((state) => state.myCart.data);
  const dispatch = useDispatch();

  const onRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const onIncreament = (id) => {
    dispatch(increamentProducts({ id }));
    itemTotalPrice;
  };
  const onDecreament = (id) => {
    dispatch(decreamentProducts({ id }));
    itemTotalPrice;
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
      <div>My cart</div>
      {cartList.length > 0 ? (
        cartList.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "4px",
              }}
            >
              <img src={item.image} key={item.id} alt="" width={20} />
              <span key={item.id} style={{ fontSize: "12px" }}>
                {item.title}
              </span>
              <span>Quantity : {item.quantity}</span>

              {item.quantity < 10 ? (
                <button onClick={() => onIncreament(item.id)}>+</button>
              ) : (
                <button disabled={true} onClick={() => onIncreament(item.id)}>
                  +
                </button>
              )}

              <button onClick={() => onDecreament(item.id)}>-</button>
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
              <div key={item.id}>
                {Number(item.price) * Number(item.quantity)}
              </div>
            </div>
          );
        })
      ) : (
        <p>No products available</p>
      )}
      <div>Total Price:{cartTotalPrice}</div>
    </div>
  );
};

export default MyCart;
