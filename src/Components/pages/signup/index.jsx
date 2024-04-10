import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const isPasswordStrong = (password) => {
    // Password should contain at least one uppercase letter, one lowercase letter, and one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstname) {
      newErrors.firstname = "Please enter first name.";
    }

    if (!formData.lastname) {
      newErrors.lastname = "Please enter last name.";
    }

    // Validation
    if (!formData.email) {
      newErrors.email = "Please enter your email.";
    }
    if (!formData.password) {
      newErrors.password = "Please enter your password.";
    } else if (!isPasswordStrong(formData.password)) {
      newErrors.password =
        "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one special character.";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Assuming user data is stored in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === formData.email);

    if (existingUser) {
      setErrors({ email: "User already exists." });
      return;
    }

    users.push({
      ...formData,
      expires: Date.now() + 24 * 24 * 60 * 60 * 1000, // Expires in 24 days
    });
    localStorage.setItem("users", JSON.stringify(users));
    alert("User signed up successfully!");
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "user",
    });
    setErrors({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // Navigate to login page after successful signup
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="shadow-md rounded px-4 pt-2 pb-4 mb-2 w-1/4"
        style={{
          background: "#4c5f7a",
          border: "1px solid",
          borderRadius: "5px",
          color: "white",
          minWidth: "350px",
        }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <div className="mb-2">
          <label
            className="block text-white-700 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:shadow-outline"
            id="firstname"
            type="text"
            placeholder="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            style={{ border: "1px solid skyblue" }}
          />
          {errors.firstname && (
            <p className="text-red-800 text-xs  font-bold">
              {errors.firstname}
            </p>
          )}
        </div>
        <div className="mb-2">
          <label
            className="block text-white-700 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:shadow-outline"
            id="lastname"
            type="text"
            placeholder="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            style={{ border: "1px solid skyblue" }}
          />
          {errors.lastname && (
            <p className="text-red-800 text-xs  font-bold">{errors.lastname}</p>
          )}
        </div>
        <div className="mb-2">
          <label
            className="block text-white-700 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ border: "1px solid skyblue" }}
          />
          {errors.email && (
            <p className="text-red-800 text-xs  font-bold">{errors.email}</p>
          )}
        </div>
        <div className="mb-2">
          <label
            className="block text-white-700 text-sm font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ border: "1px solid skyblue" }}
          />
          {errors.password && (
            <p className="text-red-800 text-xs  font-bold">{errors.password}</p>
          )}
        </div>
        <div className="mb-2">
          <label
            className="block text-white-700 text-sm font-semibold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700  leading-tight focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ border: "1px solid skyblue" }}
          />
          {errors.confirmPassword && (
            <p className="text-red-800 text-xs  font-bold">
              {errors.confirmPassword}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-white-700 text-sm font-semibold mb-2"
            htmlFor="role"
          >
            Role
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:shadow-outline"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={{ border: "1px solid skyblue" }}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <Link
            to="/login"
            className="inline-block align-baseline font-bold text-sm text-white-800 hover:text-gray-1000"
          >
            Already have an account? Login
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline w-full"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
