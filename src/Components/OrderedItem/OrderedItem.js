import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Order from "./Order/Order";

const OrderedItem = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5000/order/${user.email}`, {
      headers: { authorization: `bearer ${localStorage.getItem("idToken")}` },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          history.push("/login");
        }
      })
      .then((data) => setOrders(data));
  }, []);

  return (
    <section>
      <div className="container">
        <h2 className="text-primary my-3">Order Information:</h2>
        <div className="row row-cols-2 g-4">
          {orders.map((item) => (
            <Order key={item._id} orderList={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderedItem;
