import react, { useState, useContext, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Cart } from "../../utils/Store";
import PaymentGateway from "../../services/PaymentGateway";
import "./checkout.css";

const Checkout = () => {
  const { cart, setCart } = useContext(Cart);
  console.log(cart);

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
            <div>
              <div>
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
              </div>

              <div className="checkout_product_info">
                <div className="checkout_product_info_left">
                  <p>
                    <strong>Product: </strong> Jessie thunder shoes
                  </p>
                  <p>
                    <strong>ID: </strong>92132983
                  </p>
                  <div className="selectedColor"></div>
                  <p>
                    <strong>Size: </strong>37.5
                  </p>
                </div>
              </div>
              <div className="checkout_product_info_right">
                <div>
                  <div>+</div>
                  <div>2</div>
                  <div>-</div>
                </div>

                <div>
                  <p>$30</p>
                </div>
              </div>
            </div>
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
