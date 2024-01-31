import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../Helpers/AxiosInstance';
import styles from "./manager.module.css"

const UpdateAcademy = () => {
    let {id}=useParams();
    console.log(id);
    let token=localStorage.getItem("token");
    let navigate=useNavigate()
    let [data,setData]=useState({
        academyName:"",
        description:"",
        email:"",
        contact:""
    });
    let { academyName, description, email, contact } = data;

    useEffect(() => {
        let fetchData = async () => {
          let { data } = await axiosInstance.get(`/academies/get/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(data.data);
          setData(data.data);
        };
        fetchData();
      }, []);

      let handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setData({...data, [name]:value});
      }

      let handleSubmit=async(e)=>{
        e.preventDefault();
        let payload={academyName, description, email, contact,id}
        console.log(payload);
        let finalData=await axiosInstance.put("/academies/update",
        payload,{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        }
        )
        console.log(finalData);
        alert("Successfull Updated")
        navigate("/adminDashboard/viewAcademy")
        // window.location.assign("/adminDashboard/viewAcademy")
      }
  return (
   
        <div>
        <form action="" onSubmit={handleSubmit}>
            <h2>Update Academy Register</h2>
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
  )
}

export default UpdateAcademy