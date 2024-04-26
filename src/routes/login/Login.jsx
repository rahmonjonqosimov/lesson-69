import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Header.logo.svg";
import axios from "../../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  let [password, setPassword] = useState("OWsTbMUgFc");
  let [username, setUsername] = useState("rshawe2");
  let [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let user = {
      username,
      password,
    };
    axios
      .post("/auth/login", user)
      .then((res) => {
        return (
          console.log(res),
          toast.success("Welcome to Admin panel!"),
          localStorage.setItem("x-auth-token", res.data.token),
          navigate("/admin"),
          location.reload()
        );
      })
      .catch((err) => {
        console.log(err);
        toast.error("Username or password is incorrect");
      })
      .finally(() => setLoading(false));
  };
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <div className="container login__page">
        <form onSubmit={handleSubmit} className="form">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <div className="login__username">
            <label htmlFor="username">Email Address*</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Your Username"
              required
              type="text"
              id="username"
            />
          </div>
          <div className="login__password">
            <label htmlFor="password">Password*</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your password"
              type="password"
              id="password"
            />
          </div>
          <div className="login__btns">
            <button disabled={loading}>
              {" "}
              {loading ? "Loading..." : "Login"}
            </button>
            <h4>Signup?</h4>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Login;
