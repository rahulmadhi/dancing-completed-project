import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../Helpers/AxiosInstance';
import styles from "./manager.module.css"

const UpdateBranch = () => {
  let {id}=useParams();
  console.log(id);
  let token=localStorage.getItem("token");
  let navigate=useNavigate()
  let [data,setData]=useState({
      address:"",
      city:"",
      phone:"",
      pincode:""
  });
  let { address, city, phone, pincode } = data;

  useEffect(() => {
      let fetchData = async () => {
        let { data } = await axiosInstance.get(`/branches/get/${id}`, {
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
      let payload={address, city, phone, pincode,id}
      console.log(payload);
      let finalData=await axiosInstance.put(`/branches/update/${id}`,
      payload,{
          headers:{
              Authorization:`Bearer ${token}`,
          },
      }
      )
      console.log(finalData);
      alert("Successfull Updated")
      navigate("/adminDashboard/viewBranch")
      // window.location.assign("/adminDashboard/viewAcademy")
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <h2>Update Academy Register</h2>
        <div>
            <label htmlFor="" className={styles.registerlabel}>Address</label><br />
            <input type="text" name="address" id="" 
            className={styles.registerinput} onChange={handleChange} value={address}/><br />
            </div>
        <div>
        <label htmlFor="" className={styles.registerlabel}>City</label><br />
            <input type="text" name="city" id=""className={styles.registerinput} onChange={handleChange} value={city}/><br />
        </div>
        <div>
        <label htmlFor="" className={styles.registerlabel}>Phone</label><br />
            <input type="number" name="phone" id=""className={styles.registerinput}onChange={handleChange}  value={phone}/><br />
        </div>
                    
        <div>
        <label htmlFor="" className={styles.registerlabel}>Pincode</label><br />
            <input type="number" name="pincode" id=""className={styles.registerinput}onChange={handleChange} value={pincode}/><br />
        </div>
        <div>
            <button id={styles.sub}>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default UpdateBranch