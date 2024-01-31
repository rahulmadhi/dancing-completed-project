import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Helpers/AxiosInstance";
import styles from '../Manager/manager.module.css'

const UpdateEachManager = () => {
    let navigate = useNavigate();
  let { id } = useParams();
  let token = localStorage.getItem("token");
  let [data, setData] = useState("");
  let { userName, email, password, dob, phone, gender } = data;
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get(`/academymanagers/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.data);
      setData(data.data);
    };
    fetchData();
  }, []);
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { userName, email, password, dob, gender, phone, id };
    console.log(payload);
    let finalData = await axiosInstance.put("/academymanagers/update",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(finalData);
    alert("Successfully updated");
  
    navigate("/adminDashboard/viewAcademyManager");
  };
  return (
    <div>
        <div id={styles.registerbody11}>
        <div id={styles.form11}>
          <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className={styles.registerrlabel}>Username</label><br />
            <input type="text" name="userName" id="" 
            className={styles.registerrinput} onChange={handleChange} value={userName}/><br />
            </div>
          <div>
          <label htmlFor="" className={styles.registerrlabel}>e-mail</label><br />
              <input type="email" name="email" id=""className={styles.registerrinput} onChange={handleChange} value={email}/><br />
          </div>
          <div>
          <label htmlFor="" className={styles.registerrlabel}>Password</label><br />
              <input type="password" name="password" id=""className={styles.registerrinput}onChange={handleChange}  value={password}/><br />
          </div>
          <div>
          <label htmlFor="" className={styles.registerrlabel}>Dob</label><br />
              <input type="date" name="dob" id="dob"className={styles.registerrinput}onChange={handleChange} value={dob}/><br/>
          </div>
          <div>
          <label htmlFor="" className={styles.registerrlabel}>Phone</label><br />
              <input type="number" name="phone" id=""className={styles.registerrinput}onChange={handleChange} value={phone}/><br />
          </div>
          <div>
          <label htmlFor="" className={styles.registerrlabel}>Gender</label><br />
              <input type="radio" name="gender" id="male" className={styles.registerrgender} onChange={handleChange} value="male"/>Male
              <input type="radio" name="gender" id="female" className={styles.registerrgender} onChange={handleChange} value="female"/>Female
          </div>
          <div>
              <button id={styles.sub}>Submit</button>
          </div>
          </form>
        </div>
      </div> 

    </div>
  )
}

export default UpdateEachManager