import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axiosInstance from '../../Helpers/AxiosInstance';
import styles from "../Manager/manager.module.css";

const UpdateCourse = () => {
    let {id}=useParams();
    console.log(id);
    let token=localStorage.getItem("token")
    let navigate=useNavigate();
    let [course,setCourse]=useState({
        courseDurationInMonths: "",
        fee: "",
        type: "",
        name: "",
        image: "",
      });
      let { courseDurationInMonths, fee, name, image, type } = course;
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCourse({ ...course, [name]: value });
  };
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get(`/dancecourses/get/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(data.data);
      setCourse(data.data);
    };
    fetchData();
  }, []);
  let handleSubmit = async (e) => {
    e.preventDefault()
    let payload = { courseDurationInMonths, fee, image, name,type };
    console.log(payload);
    let finalData = await axiosInstance.put(
      `/dancecourses/update/${id}`,
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
    <>
    <div>UpdateCourse</div>
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
    </>
  )
}

export default UpdateCourse