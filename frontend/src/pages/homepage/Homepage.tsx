import react, { useState, useContext } from "react";
import "./homepage.css";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { popularProducts, categories, sliderItems } from "../../data";
import Newsletter from "../../components/newsletter/Newsletter";
import { Cart } from "../../utils/Store";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";

import { AiOutlineArrowLeft } from "react-icons/ai";

const Homepage = () => {
  const [counter, setCounter] = useState<number>(1);

  const nextButton = () => {
    if (counter <= 3) {
      setCounter((prev) => prev + 1);
    } else {
    }
  };

  //store

  const { cart, setCart } = useContext(Cart);

  const prevButton = () => {};

  return (
    <div className="homepage">
      <Header />
      <div className="sliderContainer">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "1rem",
            backgroundColor: "red",
          }}
        >
          <IoMdArrowDropleft
            onClick={() => {
              prevButton();
              console.log("CLICKED");
            }}
            className="prevButton"
          />
        </div>

        <div className="slider">
          {sliderItems.map((item: any) => {
            return (
              <div className="card">
                <img src={sliderItems[0].img} />

                <div className="text">
                  <h3>{sliderItems[0].title}</h3>
                  <p>{sliderItems[0].desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ position: "absolute", top: "50%", right: "1rem" }}>
          <IoMdArrowDropright onClick={nextButton} className="nextbutton" />
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
                    setCart([
                      ...cart,
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
