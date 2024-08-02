import Order from "../model/order.model.js";

export const placeOrder = async (req, res) => {
  try {
    const { customerId, item, address, city, state, phone } = req.body;
    const d = new Date();
    let text = d.toLocaleDateString();
    await Order.create({
      customer_id: customerId,
      item_id: item,
      state,
      city,
      address,
      phone,
      deliveryDate: text,
    });
    res.status(200).json({
      message: "Message Send",
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getOrder = async (req, res) => {
  try {
    const order_list = await Order.find().populate("item_id");
    res.status(200).json(order_list);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};
