import React, { useState } from "react";
import { doRegister } from "../services/ApiService";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let payload = {
      userName,
      email,
      password,
    };

    console.log("Register attempt with:", payload);

    try {
      let response = await doRegister(payload);
      console.log("Registration successful:", response);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
      <h1 className="text-2xl">Register Page</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              required
              className="border"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              className="border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              className="border"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="border">
              Register
            </button>
          </div>
        </form>
        <div>
            <Link to="/login">Alredy have a account? Login</Link>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
