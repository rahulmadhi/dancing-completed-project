import React from 'react'
import axiosInstance from '../../Helpers/AxiosInstance'
import {  useParams } from 'react-router-dom'
import { useEffect ,useState} from 'react'
import styles from '../Manager/manager.module.css'
import { Link } from 'react-router-dom'

const ViewCourse = () => {
  let [course,setCourse]=useState([])
  let token=localStorage.getItem("token");
  let {id}=useParams()
  console.log(id);

  let handleDelete=(id)=>{
    axiosInstance.delete(`/dancecourses/delete/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`,
      }
    })
    alert("deleted successfully");
    window.location.assign("/adminDashboard/viewCourse")
  }
    useEffect(()=>{
        let fetchData=async()=>{
            let {data}=await axiosInstance.get("/dancecourses/getall",{
              headers:{
                Authorization:`Bearer ${token}`,
              },  
            })
            console.log(data.data);
            setCourse(data.data)
        }
        fetchData()
    },[])
  return (
    <section id={styles.mainblock}>
      <h2>Dance Course Details</h2>
      <article>
     <div id={styles.cardblock}>
      
        {course.map((x,i) => {
          return (
            <div key={i} id={styles.card}>
              
              {/* <h4>Name:{x.name}</h4> */}
              <h4>Dance Type:{x.type}</h4>
              <h4>Course Duration In Months:{x.courseDurationInMonths}</h4>
              <h4>Fee:{x.fee}</h4>
              <div>
              <button>
                <Link to={`/adminDashboard/viewCourse/updateCourse/${x.id}`}> UPDATE</Link></button>
              <button onClick={()=>{ handleDelete(x.id)}}>Delete
              </button>
              </div>
            </div>
          );
        })}
      </div>
      </article>
      </section>
  )
}

export default ViewCourse