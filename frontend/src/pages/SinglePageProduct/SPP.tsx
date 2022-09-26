import react, { useState, useContext, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Cart } from "../../utils/Store";
import "./spp.css";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { getProductById } from "../../services/product";
import { AddtoCart } from "../../services/cart";
import { IoMdTennisball } from "react-icons/io";
const SPP = () => {
  const location = useLocation();
  const { cart, setCart } = useContext(Cart);
  const [value, setValue] = useState<number>(1);

  const [color, setColor] = useState<any>();
  const [selectedColor, setSelectedColor] = useState<any>();
  const [size, setSize] = useState<any>([]);

  const [fetchedproduct, setFetchedProduct] = useState<any>();

  const {} = useSearchParams();

  const { productId } = useParams();

  useEffect(() => {
    getProductById(productId).then((res: any) => {
      // console.log(res.data.size);
      setFetchedProduct(res.data);
      setColor(res.data.quantity.color);
    });
  }, []);

  function addition() {
    setValue((prev) => prev + 1);

    for (const item in selectedColor) {
      const saved = item;

      selectedColor[item] = value;
    }

    // if (selectedColor) {
    //   const newValue = Object.keys(selectedColor);
    //   setSelectedColor({ newValue, value });
    // }
  }

  function sub() {
    if (value === 0) {
    } else {
      setValue((prev) => prev - 1);

      for (const item in selectedColor) {
        const saved = item;
        selectedColor[item] = value;
      }

      console.log(selectedColor);
    }
  }

  function SubmitAddtoCartfn(e: any) {
    e.preventDefault();

    fetchedproduct.quantity = value;
    fetchedproduct.color = color;
    fetchedproduct.size = e.target.size.value;
    fetchedproduct.amount = fetchedproduct.amount * value;

    console.log(fetchedproduct);

    const data = {
      userId: sessionStorage.getItem("userId"),
      uniqueId: productId,
      amount: Number(fetchedproduct.amount * value),
      color: {
        ...selectedColor,
      },
    };
    console.log(data);

    if (data) {
      AddtoCart(data).then((res) => console.log(res));
    } else {
      console.log("ERR data not present");
    }
  }

  function colorSelector() {
    if (!color?.blue && !color?.red && !color?.black) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <>
      <Header />
      <div
        style={{
          padding: "1rem",
          width: "90%",
          margin: "auto",
          marginTop: "3rem",
        }}
        className="SPPcontainer"
      >
        <div className="SPPLeftImage">
          <img src={fetchedproduct?.img} />
        </div>

        <form className="SPPRightDescription" onSubmit={SubmitAddtoCartfn}>
          <h3>{fetchedproduct?.productName}</h3>
          <p className="desc">{fetchedproduct?.productDesc}</p>

          <p className="price">$ {fetchedproduct?.amount}</p>

          <div className="sppcolor" style={{ display: "flex", gap: "2rem" }}>
            <div>
              <p>Color</p>

              {colorSelector() && color?.blue > 0 ? (
                <input
                  style={{ backgroundColor: "red" }}
                  type="radio"
                  id="color"
                  name="color"
                  className="radioButton radioButtonBlue"
                  onClick={(e: any) => setSelectedColor({ blue: value })}
                />
              ) : (
                " "
              )}

              {colorSelector() && color?.red > 0 ? (
                <input
                  style={{ backgroundColor: "red" }}
                  type="radio"
                  id="color"
                  name="color"
                  onClick={(e: any) => setSelectedColor({ red: value })}
                  className="radioButton radioButtonRed"
                />
              ) : (
                " "
              )}

              {colorSelector() && color?.black > 0 ? (
                <input
                  style={{ backgroundColor: "black" }}
                  type="radio"
                  id="color"
                  name="color"
                  className="radioButton radioButtonBlack"
                  onClick={(e: any) => setSelectedColor({ black: value })}
                />
              ) : (
                " "
              )}
            </div>

            <div className="sppsize" style={{ height: "20px" }}>
              <select name="size" id="size">
                <option value="s" selected disabled>
                  Choose your size
                </option>
                <option value={fetchedproduct?.size}>
                  {fetchedproduct?.size}
                </option>
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

            {cart}
          </div>
          <div>
            <button
              className="checkoutButton"
              type="submit"
              style={{ marginRight: ".5rem", backgroundColor: "lightgreen" }}
              // onClick={() => setCart((prev: any) => [`${prev} + 1`])}
            >
              Add to Cart
            </button>
            <Link to="/checkout">
              <button className="checkoutButton">Checkout</button>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SPP;
