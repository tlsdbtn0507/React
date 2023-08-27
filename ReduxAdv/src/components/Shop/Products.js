import ProductItem from "./ProductItem";
import classes from "../../css/Products.module.css";

const Products = (props) => {
  const DUMMY_DATA = [
    { id: "p1", price: 6, title: "test Book", description: "test description" },
    {
      id: "p11",
      price: 7,
      title: "test Book1",
      description: "test description1",
    },
    {
      id: "p12",
      price: 8,
      title: "test Book2",
      description: "test description2",
    },
    {
      id: "p3",
      price: 9,
      title: "test Book3",
      description: "test description3",
    },
  ];

  const items = DUMMY_DATA.map((e) => (
    <ProductItem
      key={e.id}
      id={e.id}
      title={e.title}
      price={e.price}
      description={e.description}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{items}</ul>
    </section>
  );
};

export default Products;
