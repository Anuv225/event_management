import React, { useState } from "react";
import { doLogin } from "../services/ApiService";
import { useNavigate ,Link} from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let payload = {
      username: email,
      password: password
    };

    console.log("Login attempt with:", payload);

    try {
      let accessToken = await doLogin(payload);
      localStorage.setItem("token", accessToken);
      navigate(`/events`);

      console.log("Access Token:", accessToken);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <h1 className="text-2xl">Login Page</h1>
      <div>
        <form onSubmit={handleSubmit}>
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
              Submit
            </button>
          </div>
        </form>

        <div>
          <Link to="/register">Do not have a account? Register</Link>
        </div>

      </div>
    </>
  );
};

export default LoginPage;
