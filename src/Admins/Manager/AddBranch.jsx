import React,{useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Helpers/AxiosInstance";
import styles from "../Manager/manager.module.css";
const AddBranch = () => {
    let navigate = useNavigate();
  let token = localStorage.getItem("token");
  let {id} =useParams()
  console.log(id);
  let [data, setData] = useState({
    address: "",
    city: "",
    phone: "",
    pincode: "",
  });
  let { address, city, phone, pincode } = data;
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = async (e) => {
    e.preventDefault()
    let payload = { address, city, phone, pincode };
    console.log(payload);
    let finalData = await axiosInstance.post(
      `/branches/save?aid=${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(finalData);
    alert("Sucessfully Added");
    navigate("/adminDashboard/viewBranch");
  };
  return (
    <div>
             <div id={styles.ayioo}>
            <h2 id={styles.heaedd}>Add Branch</h2>
            </div>
        <div id={styles.register}>
             
            <form action="" id={styles.add} onSubmit={handleSubmit}>
            
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
    </div>
  )
}

export default AddBranch