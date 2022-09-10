import react, { useState, useContext } from "react";
import "./homepage.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  IoMdArrowDropleft,
  IoMdArrowDropright,
  IoMdBody,
} from "react-icons/io";
import { popularProducts, categories, sliderItems } from "../../data";
import Newsletter from "../../components/newsletter/Newsletter";
import { Cart } from "../../utils/Store";
import { Link } from "react-router-dom";
import { AiFillRightCircle, AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { ObjectType } from "typescript";

const Homepage = () => {
  const [counter, setCounter] = useState<number>(1);
  let navigate = useNavigate();

  const nextButton = () => {
    if (counter <= 3) {
      setCounter((prev) => prev + 1);
    } else {
    }
  };

  //store

  const { cart, setCart } = useContext(Cart);

  console.log(cart);
  Object(cart);
  console.log(typeof cart);

  const prevButton = () => {};

  function LeftnRightSlider(left: any) {
    let lets = document.body.querySelector<any>(".sliderContainer");
    console.log(lets);

    if (left === "left") {
      lets.scrollLeft = lets.scrollLeft - 1400;
    } else {
      lets.scrollLeft = lets.scrollLeft + 1400;
    }
  }

  return (
    <div className="homepage">
      <Header />
      <div className="sliderContainer">
        <div
          style={{
            position: "fixed",

            left: "1rem",

            backgroundColor: "red",
          }}
        >
          <IoMdArrowDropleft
            onClick={() => {
              LeftnRightSlider("left");
              console.log("CLICKED");
            }}
            className="prevButton"
          />
        </div>

        <div className="slider">
          {sliderItems.map((item: any) => {
            return (
              <div className="card">
                <img src={item.img} />

                <div className="text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            position: "fixed",
            top: "50%",
            right: "1rem",
            backgroundColor: "red",
          }}
        >
          <IoMdArrowDropright
            onClick={() => LeftnRightSlider("right")}
            className="nextButton"
          />
        </div>
      </div>

      <div className="midSection">
        {categories.map((val: any) => {
          return (
            <div>
              <img src={val.img} />
              <div className="innerText">
                <h3>{val.title}</h3>
                <button>Shop Now</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid">
        {popularProducts.map((val: any, key: any) => {
          return (
            <div className="eachGrid">
              <Link to="/checkout">
                <img
                  data-key={key}
                  src={val.img}
                  className="gridImg"
                  onClick={() =>
                    setCart((prev: any) => [
                      ...prev,
                      {
                        productId: `${val.productId}`,
                        img: `${val.img}`,
                        productName: `${val.productName}`,
                        Amount: `${val.amount}`,
                        Quantity: `${val.Quantity}`,
                      },
                    ])
                  }
                />
              </Link>

              <div className="icons">
                <AiOutlineSearch size="2rem" />
                <AiOutlineShoppingCart size="2em" />
                <BsFillHeartFill size="2rem" />
              </div>
            </div>
          );
        })}
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;

//  {sliderItems.map((val: any) => {
//             return (
//               <div className="card">
//                 <img src={val.img} />
//                 <div>
//                   <h3>{val.title}</h3>
//                   <p>{val.desc}</p>
//                   <button>Shop Now</button>
//                 </div>
//               </div>
//             );
//           })}
