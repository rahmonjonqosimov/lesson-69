import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const TopHeader = () => {
  const { pathname } = useLocation();
  let [menu, setMenu] = useState(false);
  let link = ["Category", "Products", "Pages", "Blog", "Elements"];
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  let links = link?.map((el, inx) => (
    <li key={inx}>
      <select name="" id="">
        <option value={el}>{el}</option>
      </select>
    </li>
  ));

  return (
    <section className="top__header">
      <div className="top__header__content container">
        <RiMenu2Fill
          className="menu"
          onClick={() => {
            setMenu(!menu);
          }}
        />
        <ul className={menu ? "navbar links" : "links"}>
          <li>
            <Link
              onClick={() => {
                scrollTop(), setMenu(false);
              }}
              to={"/"}
            >
              Home
            </Link>
          </li>
          {links}
        </ul>
        <div onClick={scrollTop} className="tel">
          <BsTelephone />
          <span>+123 ( 456 ) ( 7890 )</span>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
