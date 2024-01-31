import React from 'react'
import axiosInstance from '../../Helpers/AxiosInstance'
import {  useParams } from 'react-router-dom'
import { useEffect ,useState} from 'react'
import styles from '../Manager/manager.module.css'
import { Link } from 'react-router-dom'
const ViewAcademyManager = () => {
  let [managerData,setmanagerData]=useState([])
  let token=localStorage.getItem("token")
  // let navigate=useNavigate();
  let {id}=useParams()
  console.log(id);
    useEffect(()=>{
        let fetchData=async()=>{
            let {data}=await axiosInstance.get(`/academymanagers/getall`,{
              headers:{
                Authorization:`Bearer ${token}`,
              },
            })
            setmanagerData(data.data)
        }
        fetchData()
    },[token])
  return (
   <section id={styles.mainblock}>
    <h2>Manager Details</h2>
    <article>
    <div id={styles.cardblock}>
        {managerData.map((x)=>{
          return(
            <div id={styles.card}>
            <h3>Name:{x.userName}</h3>
            <h3>Email:{x.email}</h3>
            <h3>DOB:{x.dob}</h3>
            <h3>Phone:{x.phone}</h3>
            <h3>Gender:{x.gender}</h3>
              <div>
                <button><Link to={`/adminDashboard/viewAcademyManager/eachAcademyManager/${x.id}`}>View</Link></button>
            </div>
            </div>  
          )
        })}
      </div>
    </article>
   </section>
  )
}

export default ViewAcademyManager