import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../Helpers/AxiosInstance";
// import styles from "../sidebar.module.css"
const ViewAcademy = () => {
  let [users, setUsers] = useState([]);
  let token = localStorage.getItem("token");
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get("/academies/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.data);
      setUsers(data.data);
    };
    fetchData();
  }, []);
  let handleDelete = x => {
    axiosInstance.delete(`/academies/delete/${x}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("Successfully deleted");
    window.location.assign("/adminDashboard/viewAcademy");
  };

  return (
    <div>
      <h1>ACADEMY DETAILS</h1>
      <div>
        <table border={2} style={{ borderCollapse: "collapse" }}>
          <tr>
            <th>ACADEMY NAME</th>
            <th>CONTACT NUMBER</th>
            <th>DESCRIPTION</th>
            <th>EMAIL ID</th>
            <th>UPDATE</th>
            <th>ADD BRANCH</th>
            <th>DELETE</th>
          </tr>
          {users.map((branchData, i) => {
            return (
              <tr key={i}>
                <td>{branchData.academyName}</td>
                <td>{branchData.contact}</td>
                <td>{branchData.description}</td>
                <td>{branchData.email}</td>
                <td>
                  <button>
                    <Link
                      to={`/adminDashboard/viewAcademy/updateAcademy/${branchData.id}`}
                    >
                      UPDATE
                    </Link>
                  </button>
                </td>
                <td>
                  <button>
                    <Link
                      to={`/adminDashboard/viewAcademy/addBranch/${branchData.id}`}
                    >
                      ADD BRANCH
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(branchData.id);
                    }}
                  >
                    <Link>DELETE</Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ViewAcademy;
