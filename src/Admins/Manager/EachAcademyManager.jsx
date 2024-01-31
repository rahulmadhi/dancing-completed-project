import React from 'react'
import axiosInstance from '../../Helpers/AxiosInstance'
import {  useParams } from 'react-router-dom'
import { useEffect ,useState} from 'react'
import styles from '../Manager/manager.module.css'
import { Link } from 'react-router-dom'

const EachAcademyManager = () => {
    let [managerData,setmanagerData]=useState([])
  let token=localStorage.getItem("token");
  let {id}=useParams()
  console.log(id);

  let handleDelete=(id)=>{
    axiosInstance.delete(`/academymanagers/delete/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`,
      }
    })
    alert("deleted successfully");
    window.location.assign("/adminDashboard/viewAcademyManager")
  }
    useEffect(()=>{
        let fetchData=async()=>{
            let {data}=await axiosInstance.get(`/academymanagers/get/${id}`,{
              headers:{
                Authorization:`Bearer ${token}`,
              },  
            })
            setmanagerData(data.data)
        }
        fetchData()
    },[])   
  return (
    <section id={styles.mainblock}>
    <h2>Manager Details</h2>
    <article>
<div id={styles.eachcard}>
<h3>Name: {managerData.userName}</h3>
<h3>Email: {managerData.email}</h3>
<h3>DOB: {managerData.dob}</h3>
<h3>Phone: {managerData.phone}</h3>
<h3>Gender:{managerData.gender}</h3>
  <div>
    <button id={styles.eachCardButton1}><Link to={`/adminDashboard/viewAcademyManager/updateEachManager/${managerData.id}`}>Update</Link></button>
    <button id={styles.eachCardButton2}><Link to={`/adminDashboard/viewAcademyManager/addAcademy/${id}`}>Add Academy</Link></button>
    <button id={styles.eachCardButton3} onClick={()=>{handleDelete(managerData.id)} }>Delete</button> 
  </div>
</div>
    
    </article>
   </section>

  )
}
export default EachAcademyManager
