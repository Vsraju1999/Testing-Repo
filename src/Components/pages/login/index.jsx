import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setUserRole, setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const rememberMeData = JSON.parse(localStorage.getItem("rememberMeData"));
    if (rememberMeData) {
      setFormData((prevState) => ({
        ...prevState,
        email: rememberMeData.email,
        rememberMe: true,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
    console.log(formData, "formData");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    // console.log(users, "users");
    const user = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    setUserRole(user);

    localStorage.setItem("auth", true);
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    if (formData.rememberMe) {
      localStorage.setItem(
        "rememberMeData",
        JSON.stringify({ email: formData.email })
      );
    } else {
      localStorage.removeItem("rememberMeData");
    }

    if (user.role === "admin") {
      navigate("/dashboard/admin");
    } else {
      navigate("/dashboard/user");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4"
        style={{
          background: "#4c5f7a",
          border: "1px solid",
          borderRadius: "5px",
          color: "white",
          minWidth: "350px",
        }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        {error && (
          <p className="text-red-800 text-xs mb-4 font-bold">{error}</p>
        )}
        <div className="mb-4">
          <label
            className="block text-white-800 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ border: "1px solid skyblue" }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white-800 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight  focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ border: "1px solid skyblue" }}
          />
        </div>
        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500 h-5 w-5"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <span className="ml-2 text-white-700">Remember Me</span>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  focus:shadow-outline"
          >
            Sign In
          </button>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  focus:shadow-outline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  setUserRole: PropTypes.any,
};

export default LoginForm;
