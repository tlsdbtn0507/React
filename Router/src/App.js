import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/home";
import Products from "./routes/products";
import Root from "./routes/Root";
import ErrorPage from "./routes/errPage";
import ProductDetail from "./routes/productDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/products", element: <Products /> },
        { path: "/products/:productId", element: <ProductDetail /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
