const express = require("express");
const app = express();
const path = require("path");
const shortid = require("shortid");
const Razorpay = require("razorpay");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const login = require("./routes/Login");
const register = require("./routes/Register");
const info = require("./routes/Userop");
const wish = require("./routes/Wishlist");
const getproduct = require("./routes/getproduct");
const inventory = require("./routes/api/inventory/inventory");
const cart = require("./routes/api/cart/cart");
const uuid = require("./routes/api/uuid/uuid");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const razorpay = new Razorpay({
  key_id: "rzp_test_dkIJG0XBhPqOXO",
  key_secret: "uVFuEwG9eQXwlfx1gHoYYyCY",
});

app.use(
  cors({
    origin: "*",
  })
);
//database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("databased connected"))
  .catch((e) => console.log("err", e));

app.get("/", async (req, res) => {
  res.send("working");
});

app.get("/logo.png", (req, res) => {
  res.sendFile(path.join(__dirname, "TehoBlogo.png"));
});

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/info", info);
app.use("/api/wishlist", wish);
app.use("/api/cart", cart);
app.use("/api/getproductbyid", getproduct);
app.use("/api/inventory", inventory);
app.use("/api/cart", cart);
app.use("/api/uuid", uuid);
app.post("/api/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = 999;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);

    res.json({
      id: response.id,
      current: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen("5001", () => console.log("http://localhost:5001"));
