import "./App.css";
import { Footer } from "./components/footer";
import { House, Storefront } from "phosphor-react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="page">
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
        </nav>
      </div>
      <main>
        <div className="banner">
          <h2>Welcome to The Store</h2>
          <p>We Got What YOU Need.</p>
          <p>See for Yourself!</p>
          <button type="button">
            <Link to="/shop">
              <Storefront size={32} />
            </Link>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
