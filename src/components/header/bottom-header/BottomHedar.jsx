import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/Header.logo.svg";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const BottomHeader = () => {
  let token = localStorage.getItem("x-auth-token") || null;
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <section className="bottom__header">
      <div className="container">
        <div className="bottom__header__content">
          <Link to={"/"}>
            <img src={logo} className="logo" alt="Logo" />
          </Link>
          <form>
            <input type="search" placeholder="Search For items..." />
            <select name="" id="">
              <option value="">All Categories</option>
            </select>
            <button>
              <IoSearchOutline />
            </button>
          </form>
          <ul>
            <li onClick={scrollTop}>
              <Link to={`${token ? "/admin" : "/login"}`}>
                <FaRegUser />
                {token ? "Admin" : "Account"}
              </Link>
            </li>
            <li>
              <IoMdHeartEmpty />
              Wishlist
            </li>
            <li>
              <IoCartOutline /> Cart
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BottomHeader;
