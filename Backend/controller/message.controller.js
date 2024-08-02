import Message from "../model/message.model.js"

export const getMessage = async (req, res) => {
    console.log("asdf");
    try {
    const { email, message } = req.body;
    // console.log(email,message);
    await Message.create({
        email,
        message,
    })
    res.status(200).json({
      message: "Message Send",
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
