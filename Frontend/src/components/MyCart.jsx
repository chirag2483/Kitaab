import { useEffect, useState } from "react";
import axios from "axios";
import Order from "./Order";

function MyCart() {
  const [order, setOrder] = useState([]);

  const initialAuthUser = localStorage.getItem("Users");
  let id = "";
  if (initialAuthUser != null)
    for (let i = 8; i <= 31; i++) id += initialAuthUser[i];

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get("http://localhost:4001/order");
        let list = [];
        res.data.forEach((element) => {
          if (element.customer_id === id) list.push(element);
        });
        setOrder(list);
        console.log(list);
      } catch (error) {
        console.log(error);
      }
    };
    getOrder();
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden mt-12">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {order.length === 0 && <h2> Empty</h2>}
          {order.map((item) => (
            <Order key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyCart;
