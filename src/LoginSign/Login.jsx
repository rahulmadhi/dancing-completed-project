import React, { useState } from "react";
import styles from "./login.module.css";
import axiosInstance from "../Helpers/AxiosInstance";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate("");
  let [data, setData] = useState({
    userEmail: "",
    password: "",
  });
  let { userEmail, password } = data;
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let payload = {
      userEmail,
      password,
    };
    let { data } = await axiosInstance.post("/authenticate", payload);
    console.log(data);
    alert("login successfully");
    let token = data.token;
    let role = data.role;
    let userId = data.userId;
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("userId", userId);
      navigate("/");
    }
  };

  return (
    <div id={styles.login}>
      <div id={styles.ayioo}>
        <h2 id={styles.heaedd}>Login Form</h2>
      </div>
      <div id={styles.loginbody}>
        <form action="" id={styles.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className={styles.label}>
              e-mail
            </label>
            <br />
            <input
              type="email"
              name="userEmail"
              id=""
              className={styles.input}
              onChange={handleChange}
              value={userEmail}
            />
            <br /> <br />
          </div>
          <div>
            <label htmlFor="" className={styles.label}>
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              id=""
              className={styles.input}
              onChange={handleChange}
              value={password}
            />
          </div>
          <div>
            <button id={styles.submit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
