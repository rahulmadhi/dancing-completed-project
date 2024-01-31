import React from "react";
import styles from "./navbaar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  let navigate = useNavigate();
  let role = localStorage.getItem("role");
  let token = localStorage.getItem("token");

  let logoutHandler = () => {
    alert("are you sure you want to logout");
    localStorage.clear();
    navigate("/<login/>");
  };

  return (
    <div id={styles.menu}>
      <ul>
        <li>
          <Link to={"/"} className={styles.dot}>
            <AiOutlineHome id={styles.ai} />
          </Link>
        </li>
        <li id={styles.ai}>
          <Link className={styles.dot} id={styles.ai} to={"/about"}>
            About
          </Link>
        </li>
        {role === "ROLE_USER" ? (
          <Link to={"/gallery"} className={styles.dot} id={styles.ai}>
            <li>Gallery</li>
          </Link>
        ) : null}
        {role === "ROLE_USER" ? (
          <Link to={"/userViewBranch"} className={styles.dot} id={styles.ai}>
            <li>Branch</li>
          </Link>
        ) : null}
        {role === "ROLE_ADMIN" ? (
          <Link to={"/adminDashBoard"} className={styles.dot} id={styles.ai}>
            <li>Admin DashBoard </li>{" "}
          </Link>
        ) : null}
        {token ? (
          <Link to="/login" className={styles.dot}>
            <li onClick={logoutHandler} id={styles.ai}>
              Logout
            </li>
          </Link>
        ) : (
          <>
            <li id={styles.ai}>
              <Link to={"/login"} className={styles.dot} id={styles.ai}>
                Login
              </Link>
            </li>
            <li id={styles.ai}>
              <Link to={"/register"} className={styles.dot} id={styles.ai}>
                Register
              </Link>
            </li>
          </>
        )}
       
      </ul>
    </div>
  );
};
export default Menu;
