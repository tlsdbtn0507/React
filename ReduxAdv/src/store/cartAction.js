import { cartAction } from "./cartSlice";
import { uiAction } from "./uiSlice";

export const sendCartToServer = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiAction.sendCartResult({
        status: "pending",
        title: "Sending",
        message: "Sending Data...",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-http-f3119-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            item: cart.item,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!res.ok) throw new Error("Sending Cart is failed");
    };

    try {
      await sendRequest();
      dispatch(
        uiAction.sendCartResult({
          status: "success",
          title: "Success!",
          message: "Sending Data is successfully done!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.sendCartResult({
          status: "error",
          title: "Error Occured",
          message: "Sending Data is failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const gettingData = async () => {
      const res = await fetch(
        "https://react-http-f3119-default-rtdb.firebaseio.com/cart.json"
      );
      if (!res.ok) throw new Error("Fetching Cart data is failed");
      const data = await res.json();
      return data;
    };
    try {
      const data = await gettingData();
      await dispatch(
        cartAction.replaceCart({
          item: data.item || [],
          totalQuantity: data.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiAction.sendCartResult({
          status: "error",
          title: "Fetching Error Occured",
          message: "Fetching Data is failed!",
        })
      );
    }
  };
};
