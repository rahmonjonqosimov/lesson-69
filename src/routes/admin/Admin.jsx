import React from "react";
import AdminBanner from "../../components/admin-banner/AdminBanner";
import { motion } from "framer-motion";

const Admin = () => {
  let item = [
    "Product Packing",
    "24X7 Support",
    "Delivery in 5 Days",
    "Payment Secure",
  ];
  let card = item?.map((el, inx) => (
    <div key={inx} className="admin__card">
      <h5>{el}</h5>
      <h6>Lorem ipsum dolor sit amet, consectetur adipisicing.</h6>
    </div>
  ));
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <AdminBanner />
      <div className="container">
        <div className="admin__wrapper">{card}</div>
      </div>
    </motion.div>
  );
};

export default Admin;
