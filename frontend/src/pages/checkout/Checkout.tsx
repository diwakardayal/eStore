import react, { useState, useContext, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Cart } from "../../utils/Store";
import PaymentGateway from "../../services/PaymentGateway";
import "./checkout.css";
import { useLocation, useParams } from "react-router-dom";

const Checkout = () => {
  const { cart, setCart } = useContext(Cart);

  const param = useParams();

  const loadScript = (src: any) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);

  return (
    <>
      <Header />

      <div
        style={{ padding: "1rem", width: "90%", margin: "auto" }}
        className="checkoutheader"
      >
        <div className="checkoutheading">
          <h2> Your Cart</h2>
        </div>

        <div className="shoppingButtons">
          <button className="continueShop">Continue Shopping</button>
          <div className="checkoutMidbutton">
            <div>
              <p>
                <u>Your Shopping Bag </u>
                {cart.length}
              </p>
            </div>
            <div>
              <p>
                <u>Your Wishlist (0)</u>
              </p>
            </div>
          </div>
          <button className="CheckoutNow">Checkout Now</button>
        </div>

        <div className="checkoutMain">
          <div className="checkoutLeft">
            {cart.map((val: any) => {
              return (
                <div className="checkoutLeft_child">
                  <div className="imagediv">
                    <img src={val.img} />
                  </div>

                  <div className="checkout_product_info">
                    <div className="checkout_product_info_left">
                      <p>
                        <strong>Product: </strong> {val.productName}
                      </p>
                      <p>
                        <strong>ID: </strong>
                        {val.productId}
                      </p>

                      <p>
                        <strong>Size: </strong>
                        {val.size}
                      </p>
                    </div>
                  </div>
                  <div className="checkout_product_info_right">
                    <div>
                      <div>+</div>
                      <div>1</div>
                      <div>-</div>
                    </div>

                    <div>
                      <p>Rs {val.amount}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="checkoutRight">
            <h3>Order Summary</h3>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
