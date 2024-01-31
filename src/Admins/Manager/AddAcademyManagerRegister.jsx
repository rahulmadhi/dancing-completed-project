import React, { useState } from "react";
import styles from "../Manager/manager.module.css"
import axiosInstance from "../../Helpers/AxiosInstance";
import { useNavigate } from "react-router-dom";

const AddAcademyManagerRegister=()=>{
    let navigate=useNavigate()
    let token=localStorage.getItem("token")
    let [data,setData]=useState({
        userName:"",
        email:"",
        password:"",
        dob:"", 
        phone:"",
        gender:""
    })
    let {userName,email,password,dob,phone,gender}=data;
    let handleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setData({...data,[name]:value})
    }
    let handleSubmit= async (e)=>{  
        e.preventDefault();
        // let token=localStorage.getItem("token")
   let payload={userName,email,password,dob,phone,gender}
    let finalData=await axiosInstance.post("/academymanagers/save",payload,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
        console.log(finalData);
        alert("sucessfully register")
        navigate("/adminDashboard/viewAcademyManager")
    }
    return(
        <div>
            <div id={styles.addbg}>
            <h2 id={styles.head}>AcademyManagerRegister Form</h2>
            </div>
        <div id={styles.registerr}>
             
            <form action="" id={styles.registerrform} onSubmit={handleSubmit}>
            
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
    ) 
}
export default AddAcademyManagerRegister