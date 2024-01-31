import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Helpers/AxiosInstance";
import styles from "../Manager/manager.module.css";

const AddCourse = () => {
  let navigate = useNavigate();
  let token = localStorage.getItem("token");
  let {id} =useParams()
  console.log(id);
  let [data, setData] = useState({
    courseDurationInMonths: "",
    fee: "",
    image: "",
    name: "",
    type:""
  });
  let {courseDurationInMonths,fee,image,name,type}=data

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault()
    let payload = { courseDurationInMonths, fee, image, name,type };
    console.log(payload);
    let finalData = await axiosInstance.post(
      `/dancecourses/save?branchid=${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(finalData);
    alert("Sucessfully Added your Courses");
    navigate("/adminDashboard/viewCourse");
  };

  return (
    <div>
        <h1>Add Courses</h1>
        <div id={styles.register}>
             
             <form action="" id={styles.add} onSubmit={handleSubmit}>
             
      <div>
      <label htmlFor="" className={styles.registerlabel}>Course Duration</label><br />
      <input type="text" name="courseDurationInMonths" id="" 
      className={styles.registerinput} onChange={handleChange} value={courseDurationInMonths}/><br />
      </div>
      <div>
      <label htmlFor="" className={styles.registerlabel}>Fee</label><br />
          <input type="number" name="fee" id=""className={styles.registerinput} onChange={handleChange} value={fee}/><br />
      </div>
      <div>
      <label htmlFor="" className={styles.registerlabel}>Image Data</label><br />
          <input type="text" name="image" id=""className={styles.registerinput}onChange={handleChange}  value={image}/><br />
      </div>
                     
      <div>
      <label htmlFor="" className={styles.registerlabel}>Name</label><br />
          <input type="text" name="name" id=""className={styles.registerinput}onChange={handleChange} value={name}/><br />
      </div>
      <div>
      <label htmlFor="" className={styles.registerlabel}>Type</label><br />
          <input type="text" name="type" id=""className={styles.registerinput}onChange={handleChange} value={type}/><br />
      </div>
      <div>
          <button id={styles.sub}>Submit</button>
      </div>
  </form>
         </div>
    </div>
  )
}

export default AddCourse