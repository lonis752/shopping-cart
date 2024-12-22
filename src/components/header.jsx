import { House, ShoppingCart, Storefront } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header({ cartItems, subtotal, setCartItems, setSubtotal }) {
  const [open, setOpen] = useState(false);
  const [deleteThis, setDeleteThis] = useState("");

  function handleDropDown() {
    setOpen(!open);
  }

  let tax = (subtotal * 0.12).toFixed(2);
  let total = (subtotal * 1 + tax * 1).toFixed(2);

  function handleDelete(selection) {
    setDeleteThis(selection);
    let price = cartItems.filter(x => x.id === selection).map(x => x.cartPrice);
    setSubtotal(subtotal - price)

    var index = cartItems
      .map((x) => {
        return x.Id;
      })
      .indexOf(selection);
    cartItems.splice(index);
    setCartItems([...cartItems]);
  }

  function changeSubtotal(selection) {
    
  }

  return (
    <div className="header">
      <div className="heading">
        <div className="logo">
          <img className="logo" src="./src/assets/react.svg" alt="logo" />
        </div>
        <div className="storeName">
          <h1>THE STORE</h1>
          <p>One Stop Shop for Everything</p>
        </div>
      </div>
      <nav>
        <Link to="/">
          <House size={32} />
        </Link>
        <Link to="/shop">
          <Storefront size={32} />
        </Link>
        <i className="cart" onClick={handleDropDown}>
          <ShoppingCart size={32} />
        </i>
        {open ? (
          <ul className="menu">
            {cartItems.map((item) => (
              <li className="itemsContainer" key={item.id}>
                <button
                  onClick={(e) => {
                    handleDelete(e.target.id);
                  }}
                  className="deleteBtn"
                  type="button"
                  id={item.id}
                >
                  X
                </button>
                <img className="cartItems" src={item.image} />
                <div>
                  <p>Price: ${item.cartPrice}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </li>
            ))}
            <hr></hr>
            <div className="totals">
              <li>Subtotal: ${subtotal}</li>
              <li>Tax: ${tax}</li>
              <li>Total: ${total}</li>
            </div>
          </ul>
        ) : null}
      </nav>
    </div>
  );
}
