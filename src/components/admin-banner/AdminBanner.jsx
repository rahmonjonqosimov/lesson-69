import React from "react";
import img from "../../assets/images/admin banner.png";

const AdminBanner = () => {
  return (
    <section className="admin__banner">
      <div className="container">
        <div className="admin__content">
          <div className="admin-text">
            <h2>Admin panel</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              recusandae necessitatibus quasi incidunt alias adipisci pariatur
              earum iure beatae assumenda rerum quod. Tempora magni autem a
              voluptatibus neque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
              rerum cum accusamus magni consequuntur architecto, ipsum deleniti
              expedita doloribus suscipit voluptatum eius perferendis amet!.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, maxime amet architecto est exercitationem optio ea
              maiores corporis beatae, dolores doloribus libero nesciunt qui
              illum? Voluptates deserunt adipisci voluptatem magni sunt sed
              blanditiis quod aspernatur! Iusto?
            </p>
            <div className="row">
              <div className="col">
                <h1>
                  0.1 <span>k</span>
                </h1>
                <h4>Vendors</h4>
              </div>
              <div className="col">
                <h1>
                  23 <span>k</span>
                </h1>
                <h4>Customers</h4>
              </div>
              <div className="col">
                <h1>
                  2 <span>k</span>
                </h1>
                <h4>Products</h4>
              </div>
            </div>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AdminBanner;
