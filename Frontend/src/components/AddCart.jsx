import toast from "react-hot-toast";
import axios from "axios";
import { useRef } from "react";

function AddCart({item}) {
  const initialAuthUser = localStorage.getItem("Users");
  let id = "";
  if (initialAuthUser != null)
    for (let i = 8; i <= 31; i++) id += initialAuthUser[i];
  const address = useRef();
  const city = useRef();
  const state = useRef();
  const phone = useRef();

  function submit(e) {
    // This will prevent page
    e.preventDefault();
    console.log(item._id);
    if (
      address.current.value === "" ||
      city.current.value === "" ||
      state.current.value == "" ||
      phone.current.value == ""
    ) {
      toast.error("Can't Leave Empty");
      return;
    }
    toast.success("Order Placed");
    axios
      .post(
        "http://localhost:4001/order",
        {
          item: item._id,
          address: address.current.value,
          city: city.current.value,
          state: state.current.value,
          phone: phone.current.value,
          customerId: id,
        },
        {
          headers: {
            Accept: "order/json",
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
    address.current.value = "";
    city.current.value = "";
    state.current.value = "";
    phone.current.value = "";
  }
  console.log("Hello");
  return (
    <div className="bg-white fixed left-[360px] top-[300px] h-48 z-10">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 absolute w-screen">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Address Details
        </h2>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="address"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                ref={address}
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="city"
              >
                City
              </label>
              <input
                id="city"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                ref={city}
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="state"
              >
                State
              </label>
              <input
                id="state"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                ref={state}
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                ref={phone}
              />
            </div>
          </div>

          <div className="flex justify-end mt-6 gap-3">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform focus:bg-red-500 rounded-md hover:bg-red-500 focus:outline-none bg-red-600">
              Cancel
            </button>
            <button
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
              onClick={submit}
            >
              Place Order
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddCart;
