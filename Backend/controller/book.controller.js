import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};

export const addBook = async (req, res) => {
  try {
    const { bookName, description, price, category, link } = req.body;
    let errors = [];
    for (let i = 0; i < price.length; i++) {
      if (price[i] < "0" || price[i] > "9") {
        errors.push("Price Not Valid");
      }
    }
    if (price.length > 6) {
      errors.push("Price Not Valid");
    }
    if (errors.length != 0) {
      return res.status(400).json({ message: errors[0] });
    }
    await Book.create({
        name:description,
        price,
        category,
        image:link,
        title:bookName,
    })
    res.status(201).json({
      message: "Book added successfully",
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
