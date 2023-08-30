import { useEffect } from "react";
import { fetchCartData, sendCartToServer } from "./store/cartAction";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

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
    if (cart.isFirst) dispatch(sendCartToServer(cart));
  }, [cart, dispatch]);

  return (
    <>
      {sendCartResult && <Notification state={sendCartResult} />}
      <Layout>
        {cartIsValid && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
