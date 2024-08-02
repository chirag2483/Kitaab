import { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Sell() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const bookName = useRef();
  const description = useRef();
  const price = useRef();
  const category = useRef();
  const link = useRef();

  function submit(e) {
    // This will prevent page
    e.preventDefault();
    if (
      bookName.current.value === "" ||
      description.current.value === "" ||
      price.current.value == "" ||
      category.current.value == "" ||
      link.current.value == ""
    ) {
      toast.error("Can't Leave Empty");
      return;
    }
    toast.success("Book Added");
    axios
      .post(
        "http://localhost:4001/book",
        {
          bookName: bookName.current.value,
          description: description.current.value,
          price: price.current.value,
          category: category.current.value,
          link: link.current.value,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        // success http code
        if (res.data.code === 200) {
          setSubmitted(true);
        } else {
          toast.error("Error: " + err.response.data.message);
          setError(res.data.message);
        }
      });
    bookName.current.value = "";
    description.current.value = "";
    price.current.value = "";
    category.current.value = "";
    link.current.value = "";
  }

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 flex justify-center">
        <div className="h-[900px] lg:w-1/3 md:w-1/2 dark:bg-slate-700 rounded-lg p-8 w-full mt-10 shadow-md flex flex-col justify-between">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            About Book
          </h2>
          <p className="leading-relaxed mb-5 text-white">
            Add it's information and details
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Book Name
            </label>
            <input
              type="bookName"
              id="bookName"
              name="bookName"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required="required"
              ref={bookName}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-white">
              Short Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required="required"
              ref={description}
            ></textarea>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Category
            </label>
            <input
              type="category"
              id="category"
              name="category"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required="required"
              ref={category}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Image Link
            </label>
            <input
              type="link"
              id="link"
              name="link"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required="required"
              ref={link}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Price
            </label>
            <input
              type="price"
              id="price"
              name="price"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required="required"
              ref={price}
            />
          </div>

          <button
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={submit}
          >
            Sell
          </button>
          <p className="text-xs text-white mt-3">
            There are a lot of books available at kitaab. Explore and find out .{" "}
            <br /> Some are also Free
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sell;
