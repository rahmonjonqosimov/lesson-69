import React from "react";
import logo from "../../assets/images/footer logo.svg";
import { GrLocation } from "react-icons/gr";
import { LiaSmsSolid } from "react-icons/lia";
import { BsTelephone, BsTwitterX } from "react-icons/bs";
import { RiFacebookLine, RiBasketballLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import img1 from "../../assets/images/footer-1.jpg";
import img2 from "../../assets/images/footer-2.jpg";
import img3 from "../../assets/images/footer-3.jpg";
import img4 from "../../assets/images/footer-4.jpg";
import img5 from "../../assets/images/footer-5.jpg";

const Footer = () => {
  let item = [
    {
      id: 1,
      title: "Company",
      link: [
        "About Us",
        "Delivery Information",
        "Privacy Policy",
        "Terms & Conditions",
        "contact Us",
        "Support Center",
      ],
    },
    {
      id: 2,
      title: "Category",
      link: [
        "Dairy & Bakery",
        "Fruits & Vegetable",
        "Snack & Spice",
        "Juice & Drinks",
        "Chicken & Meat",
        "Fast Food",
      ],
    },
    {
      id: 3,
      title: "Subscribe Our Newsletter",
      link: [],
      web: [
        <RiFacebookLine />,
        <BsTwitterX />,
        <RiBasketballLine />,
        <FaInstagram />,
      ],
      images: [img1, img2, img3, img4, img5],
    },
  ];
  let links = item?.map((el) => (
    <ul key={el.id}>
      <h3>{el.title}</h3>
      {el?.link?.map((ele, inx) => (
        <li key={inx}>{ele}</li>
      ))}
      <div className="btns">
        {el?.web?.map((element, index) => (
          <button className="btn" key={index}>
            {element}
          </button>
        ))}
      </div>
      <div className="images">
        {el?.images?.map((ele, inx) => (
          <img key={inx} src={ele}></img>
        ))}
      </div>
    </ul>
  ));
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="first">
              <a href="#">
                <img src={logo} alt="Logo" />
              </a>
              <p>
                FoodTrove is the biggest market of grocery products. Get your
                daily needs from our store.
              </p>
              <span>
                <GrLocation />
                <p>
                  51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783,
                  USA.
                </p>
              </span>
              <span>
                <LiaSmsSolid />
                <p>example@email.com</p>
              </span>
              <span>
                <BsTelephone />
                <p>+91 123 4567890</p>
              </span>
            </div>
            {links}
          </div>
        </div>
      </section>
      <hr />
      <h6 className="footer__h6">© 2024 FoodTrove, All rights reserved.</h6>
    </>
  );
};

export default Footer;
