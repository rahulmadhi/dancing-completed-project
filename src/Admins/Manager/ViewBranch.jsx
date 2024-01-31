import React, { useEffect, useState } from 'react'
import axiosInstance from "../../Helpers/AxiosInstance";
import { Link } from 'react-router-dom';

const ViewBranch = () => {
  let [users, setUsers] = useState([]);
  let token = localStorage.getItem("token");
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get("/branches/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      console.log(data.data);
      setUsers(data.data);
    };
    fetchData()
  }, [])
  let handleDelete=(x)=>{
    axiosInstance.delete(`/academies/delete/${x}`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    alert("Successfully deleted")
    window.location.assign("/adminDashboard/viewAcademy")
  }
  return (
    <div>
      <h1>View Branch</h1>

      <div>
        <table  border={2} style={{ borderCollapse: "collapse" }}>
          <tr>
            <th>Address</th>
            <th>City</th>
            <th>Phone</th>
            <th>Pincode </th>
            <th>Update </th>
            <th>Add Courses </th>
            <th>Delete </th>
          </tr>
          {users.map((updateData, i) => {
            return (
              <tr key={i}>
                <td>{updateData.address}</td>
                <td>{updateData.city}</td>
                <td>{updateData.phone}</td>
                <td>{updateData.pincode}</td>
                <td>
                  <button><Link to={`/adminDashboard/viewBranch/updateBranch/${updateData.id}`}>Update</Link></button>
                </td>
                <td>
                  <button><Link to={`/adminDashboard/viewBranch/addCourse/${updateData.id}`}>Add Course</Link>
                    </button>
                </td>
                <td>
                  <button onClick={()=>{handleDelete(updateData.id)}}>Delete</button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default ViewBranch