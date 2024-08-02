import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contact from "./contact/Contact";
import Login from "./components/Login";
import SellPage from "./sell/SellPage";
import Cart from "./cart/Cart";

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={
              authUser ? (
                <Courses/>
              ) : (
                <>
                  <Navigate to="/signup" />
                  <Login />
                </>
              )
            }
          />
          <Route
            path="/sell"
            element={
              authUser ? (
                <SellPage />
              ) : (
                <>
                  <Navigate to="/signup" />
                  <Login />
                </>
              )
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/order" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
