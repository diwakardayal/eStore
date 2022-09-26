import react, { useState, useEffect, useContext } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { AiFillRightCircle, AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { ObjectType } from "typescript";
import { readlink } from "fs/promises";
import { AddtoCart, WishList } from "../../services/cart";
import { Navigate } from "react-router-dom";
import { getAllProduct, getProductById } from "../../services/product";
import { getUUDI } from "../../services/uuid";

const Homepage = () => {
  const [counter, setCounter] = useState<number>(1);
  let navigate = useNavigate();
  const [added, setAdded] = useState(false);
  const [test, setTest] = useState({});

  const [productdata, setProductData] = useState<any>([]);

  const nextButton = () => {
    if (counter <= 3) {
      setCounter((prev) => prev + 1);
    } else {
    }
  };

  //store

  const { cart, setCart } = useContext(Cart);

  Object(cart);
  // console.log(cart);

  const prevButton = () => {};

  function LeftnRightSlider(left: any) {
    let lets = document.body.querySelector<any>(".sliderContainer");

    if (left === "left") {
      lets.scrollLeft = lets.scrollLeft - 1500;
    } else {
      lets.scrollLeft = lets.scrollLeft + 1500;
    }
  }

  useEffect(() => {
    getAllProduct().then((res: any) => setProductData(res.data));

    getUUDI().then((res: any) => {
      if (!sessionStorage.getItem("userId")) {
        sessionStorage.setItem("userId", res.data);
      }
    });
  }, []);

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
          {sliderItems.map((item: any, key: number) => {
            return (
              <div className="card">
                <img src={item.img} />

                <div className="text">
                  <div>
                    <h3>{item.title}</h3>
                  </div>
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
        {categories.map((val: any, key: number) => {
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
        {productdata?.map((val: any, key: any) => {
          return (
            <div className="eachGrid">
              <Link to="/">
                <img data-key={key} src={val.img} className="gridImg" />
              </Link>

              <div className="icons">
                <div>
                  <AiOutlineSearch
                    size="2rem"
                    className="search"
                    onClick={() => {
                      // navigate(`/buy/${val.id}`);
                      navigate(`/buy/productId/${val.uniqueId}`);
                    }}
                  />
                </div>

                <div>
                  <AiOutlineShoppingCart
                    size="2em"
                    className="addtocart"
                    onClick={() => {
                      const data = {
                        uniqueId: val.id,
                        productName: val.productName,
                        img: val.img,
                        productId: val.productId,
                        color: val.color,
                        size: val.size,
                        amount: val.amount,
                        quantity: val.quantity,
                      };
                    }}
                  />
                </div>

                <div>
                  <BsFillHeartFill
                    size="2rem"
                    className="wishlist"
                    onClick={() => {
                      const data = {
                        uniqueId: val.id,
                        productName: val.productName,
                        img: val.img,
                        productId: val.productId,
                        color: val.color,
                        size: val.size,
                        amount: val.amount,
                        quantity: val.quantity,
                      };

                      WishList(data).then((res: any) => console.log(res));
                    }}
                  />
                </div>
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

// contextAPI code
// onClick={() => {
//                     if (cart.length === 0) {
//                       setCart((prev: any) => [
//                         {
//                           id: val.id,
//                           productId: `${val.productId}`,
//                           img: `${val.img}`,
//                           productName: `${val.productName}`,
//                           amount: val.amount,
//                           quantity: Number(val.quantity),
//                           color: `${val.color}`,
//                           size: `${val.size}`,
//                         },
//                       ]);
//                     } else {
//                       for (const item of cart) {
//                         console.log("item.id", item.id);
//                         console.log("val.id", val.id);
//                         console.log(item);
//                         console.log(cart);

//                         if (item.id === val.id) {
//                           item.quantity++;
//                           console.log(item);

//                           // setCart((prev: any) => [...prev, item.quantity++]);
//                         } else {
//                           setCart((prev: any) => [
//                             ...prev,
//                             {
//                               id: val.id,
//                               productId: `${val.productId}`,
//                               img: `${val.img}`,
//                               productName: `${val.productName}`,
//                               amount: val.amount,
//                               quantity: Number(val.quantity),
//                               color: `${val.color}`,
//                               size: `${val.size}`,
//                             },
//                           ]);
//                         }
//                       }
//                     }
//                   }}

// UpdateCart({
//                     _id: val.id,
//                     productName: val.productName,
//                     img: val.img,
//                     productId: val.productId,
//                     color: val.color,
//                     size: val.size,
//                     amount: val.amount,
//                     quantity: val.quantity,
//                   }).then((res) => console.log(res))
//                 }
