import { useEffect } from "react";
import { fetchCartData, sendCartToServer } from "./store/cartAction";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiAction } from "./store/uiSlice";

let isShow = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { cartIsValid } = useSelector((state) => state.ui);
  const { sendCartResult } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isShow) {
      isShow = false;
      return;
    }
    if (cart.isFirst) dispatch(sendCartToServer(cart, cart.commandType));

    if (!cart.item.length) dispatch(uiAction.toggle());
  }, [cart, dispatch]);

  const showNotif = Object.keys(sendCartResult).length;

  return (
    <>
      {showNotif !== 0 && <Notification state={sendCartResult} />}
      <Layout>
        {cartIsValid && cart.item.length && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
