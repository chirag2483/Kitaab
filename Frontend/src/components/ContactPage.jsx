import { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const email = useRef();
  const message = useRef();

  function submit(e) {
    // This will prevent page
    e.preventDefault();
    if(email.current.value==="" || message.current.value==="") return;
    toast.success("Message Sent");
    axios
      .post(
        "http://localhost:4001/contact/message",
        {
          email: email.current.value,
          message: message.current.value,
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
      // console.log(res.data.code);
    email.current.value = "";
    message.current.value = "";
    let params = serializeFormQuery();
    setSearchParams(params);
  }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // if (submitted) {
  //   return <p>We've received your message, thank you htmlFor contacting us!</p>;
  // }

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 flex justify-center">
        <div className="h-[600px] lg:w-1/3 md:w-1/2 dark:bg-slate-700 rounded-lg p-8 w-full mt-10 shadow-md flex flex-col justify-between">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            About You
          </h2>
          <p className="leading-relaxed mb-5 text-white">
            Add your information and details
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required="required"
              ref={email}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required="required"
              ref={message}
            ></textarea>
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={submit}
          >
            Button
          </button>
          <p className="text-xs text-white mt-3">
            We will contact you as soon as possible . It might take upto 48
            hours.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
