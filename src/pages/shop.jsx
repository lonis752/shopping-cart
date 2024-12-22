import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Shop = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((e) => window.alert(e))
      .finally(() => setLoading(false));
  }, []);

  function handleClick(item) {
    let selectedItem = item;
    addedItemsArray(selectedItem);
    getSubtotal(selectedItem);
  }

  function addedItemsArray(item) {
    let id = item - 1;
    let selectedItem = products[id];
    if (cartItems.includes(selectedItem)) {
      selectedItem.quantity++;
      selectedItem.cartPrice = (
        selectedItem.cartPrice * 1 +
        selectedItem.price * 1
      ).toFixed(2);
      setCartItems([...cartItems]);
    } else {
      selectedItem.quantity = 1;
      selectedItem.cartPrice = (selectedItem.price * 1).toFixed(2);
      setCartItems([...cartItems, selectedItem]);
    }
  }
  function getSubtotal(item) {
    let id = item - 1;
    let price = products[id].price;
    setSubtotal(subtotal + price);
  }

  return (
    <>
      <div className="page">
        <Header
          cartItems={cartItems}
          setCartItems={setCartItems}
          subtotal={subtotal}
          setSubtotal={setSubtotal}
        />
        <div className="content">
          {loading && <h1>Loading...</h1>}
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} />
              <div>
                <p>{product.title}</p>
                <p>{`$${product.price.toFixed(2)}`}</p>
              </div>
              <button
                onClick={(e) => {
                  handleClick(e.target.id);
                }}
                id={product.id}
                className="btn"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};
