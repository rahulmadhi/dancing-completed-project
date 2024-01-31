import React, { useState } from "react";
import styles from "../LoginSign/register.module.css"
import axiosInstance from "../Helpers/AxiosInstance";
const AdminRegister=()=>{
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
        // console.log(data);
   let payload={userName,email,password,dob,phone,gender}
    let finalData=await axiosInstance.post("/admins/save",payload)
        console.log(finalData);
        alert("sucessfully register")
        
    }

    return(
        <div id={styles.register}>
             {/* <h2 id={styles.heaedd}>Register Form for Admin</h2> */}
            <form action="" id={styles.registerform} onSubmit={handleSubmit}>
           
                    <div>
                        <label htmlFor="" className={styles.registerlabel}>Username</label><br />
                        <input type="text" name="userName" id="" 
                        className={styles.registerinput} onChange={handleChange} value={userName}/><br />
                        </div>
                    <div>
                    <label htmlFor="" className={styles.registerlabel}>e-mail</label><br />
                        <input type="email" name="email" id=""className={styles.registerinput} onChange={handleChange} value={email}/><br />
                    </div>
                    <div>
                    <label htmlFor="" className={styles.registerlabel}>Password</label><br />
                        <input type="password" name="password" id=""className={styles.registerinput}onChange={handleChange}  value={password}/><br />
                    </div>
                    <div>
                    <label htmlFor="" className={styles.registerlabel}>Dob</label><br />
                        <input type="date" name="dob" id="dob"className={styles.registerinput}onChange={handleChange} value={dob}/><br/>
                    </div>
                    <div>
                    <label htmlFor="" className={styles.registerlabel}>Phone</label><br />
                        <input type="number" name="phone" id=""className={styles.registerinput}onChange={handleChange} value={phone}/><br />
                    </div>
                    <div>
                    <label htmlFor="" className={styles.registerlabel}>Gender</label><br />
                        <input type="radio" name="gender" id="male" className={styles.registergender} onChange={handleChange} value="male"/>Male
                        <input type="radio" name="gender" id="female" className={styles.registergender} onChange={handleChange} value="female"/>Female
                    </div>

                    <div>
                        <button id={styles.sub}>Submit</button>
                    </div>
                </form>

        </div>
    )
    
}
export default AdminRegister