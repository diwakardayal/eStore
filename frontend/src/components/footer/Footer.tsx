import react from "react";
import "./footer.css";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="desc">
        <h1>eClothing</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
      </div>
      <div className="middle">
        <h3>Useful Links</h3>
        <div>
          <ul>
            <li>Home</li>
            <li>Man Fashion</li>
            <li>Accessories</li>
            <li>Oder Tracking</li>
            <li>Wishlist</li>
            <li>Home</li>
            <li>Man Fashion</li>
            <li>Accessories</li>
            <li>Oder Tracking</li>
            <li>Wishlist</li>
          </ul>
        </div>
      </div>
      <div className="contact">
        <h3>Contact</h3>
        <div>
          <MdLocationOn />
          <p>622 Dixie Path , South Tobinchester 98336</p>
        </div>
        <div>
          <BsTelephoneFill />
          <p>+1 234 56 78</p>
        </div>
        <div>
          <HiOutlineMail />
          <p>Contact@email.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
