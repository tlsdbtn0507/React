import { Link } from "react-router-dom";

const Products = () => {
  const PRODUCTS = [
    { id: "p1", title: "Product1" },
    { id: "p2", title: "Product2" },
    { id: "p3", title: "Product3" },
    { id: "p4", title: "Product4" },
  ];

  return (
    <>
      <h1>This is Product Page</h1>
      <p>
        to <Link to="/"> home </Link>
      </p>
      <ul>
        {PRODUCTS.map((e) => (
          <li key={e.id}>
            <Link to={`/products/${e.id}`}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Products;
