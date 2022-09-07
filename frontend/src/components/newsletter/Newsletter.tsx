import react from "react";
import "./Newsletter.css";
import { IoMdSend } from "react-icons/io";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h2>Newsletter</h2>
      <p>Get timely updates from your favorite products</p>
      <div>
        <input type="text" placeholder="Your Email" />
        <button>
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
