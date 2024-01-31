import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Helpers/AxiosInstance";
import styles from "../Manager/manager.module.css";

const AddAcademy = () => {
    let navigate = useNavigate();
  let token = localStorage.getItem("token");
  let {id} =useParams()
  let [data, setData] = useState({
    academyName: "",
    description: "",
    email: "",
    contact: ""
  });
  let { academyName, description, email, contact } = data;
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value }); 
  };
  let handleSubmit = async (e) => {
    e.preventDefault()
    let payload = { academyName, description, email, contact };
    console.log(payload);
    // http://localhost:8082/academies/saveacademy?managerId=USER-105

    let finalData = await axiosInstance.post(
      `/academies/saveacademy?managerId=${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );
    console.log(finalData);
    alert("Sucessfully submitted");
    navigate("/adminDashboard/viewAcademy");
  };
  return (
    <div>
        <div id={styles.ayioo}>
            <h2 id={styles.heaedd}>Add Academy Form</h2>
            </div>
        <div id={styles.register}>
             
            <form action="" id={styles.add} onSubmit={handleSubmit}>
            
                    <div>
                        <label htmlFor="" className={styles.registerlabel}>Academyname</label><br />
                        <input type="text" name="academyName" id="" 
                        className={styles.registerinput} onChange={handleChange} value={academyName}/><br />
                        </div>
                    <div>
                    <label htmlFor="" className={styles.registerlabel}>Description</label><br />
                        <input type="text" name="description" id=""className={styles.registerinput} onChange={handleChange} value={description}/><br />
                    </div>
                    <div>
                    <label htmlFor="" className={styles.registerlabel}>e-mail</label><br />
                        <input type="email" name="email" id=""className={styles.registerinput}onChange={handleChange}  value={email}/><br />
                    </div>
                    
                    <div>
                    <label htmlFor="" className={styles.registerlabel}>Contact</label><br />
                        <input type="number" name="contact" id=""className={styles.registerinput}onChange={handleChange} value={contact}/><br />
                    </div>
                    <div>
                        <button id={styles.sub}>Submit</button>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default AddAcademy