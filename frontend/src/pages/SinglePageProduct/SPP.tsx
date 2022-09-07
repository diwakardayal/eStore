import react, { useState, useContext } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Cart } from "../../utils/Store";
import "./spp.css";
import { Link } from "react-router-dom";
const SPP = () => {
  const { cart, setCart } = useContext(Cart);
  const [value, setValue] = useState<number>(1);

  function addition() {
    setValue((prev) => prev + 1);
  }

  function sub() {
    if (value === 0) {
    } else {
      setValue((prev) => prev - 1);
    }
  }

  return (
    <>
      <Header />
      <div
        style={{ padding: "1rem", width: "90%", margin: "auto" }}
        className="SPPcontainer"
      >
        <div className="SPPLeftImage">
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </div>

        <div className="SPPRightDescription">
          <h3>Denim Jumpsuit</h3>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>

          <p className="price">$ 20</p>

          <div className="sppcolor" style={{ display: "flex", gap: "2rem" }}>
            <div>
              <p>Color</p>
              <input
                type="radio"
                id="color"
                name="color"
                value="blue"
                className="radioButton radioButtonBlue "
              />
              <input
                type="radio"
                id="color"
                name="color"
                value="red"
                className="radioButton radioButtonRed"
              />
              <input
                type="radio"
                id="color"
                name="color"
                value="green"
                className="radioButton radioButtonGreen"
              />
            </div>

            <div className="sppsize" style={{ height: "20px" }}>
              <select name="cars" id="cars">
                <label>Choose a car:</label>
                <option value="s" selected disabled>
                  Choose your size
                </option>
                <option value="s">S</option>
                <option value="m">m</option>
                <option value="l">l</option>
                <option value="xl">xl</option>
              </select>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "1rem",
              gap: "2rem",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                fontWeight: "bolder",
                marginTop: "1rem",
              }}
            >
              <div onClick={sub}>-</div>
              <div>{value}</div>
              <div onClick={addition}>+</div>
            </div>
            <button onClick={() => setCart((prev: number) => prev + 1)}>
              Add to Cart
            </button>
            {cart}
          </div>
          <Link to="/checkout">
            <button className="checkoutButton">Checkout</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SPP;
