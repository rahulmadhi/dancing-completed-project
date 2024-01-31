import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./sidebar.module.css"
const AdminSidebar = () => {
  return (
    <>
        <section id={styles.sect}>
            <article>
            <div>Admin Dashboard</div><br />
                 <ul>
                <li><Link to={"/adminDashboard/addAcademyManager"}>Academy Manager Register</Link></li><br />
                <li><Link to={"/adminDashboard/viewAcademyManager"}>View Academy Manager</Link></li><br />
                <li><Link to={"/adminDashboard/viewAcademy"}>View Academy</Link></li><br />
                <li><Link to={"/adminDashboard/viewBranch"}>View Branch</Link></li><br />
                <li><Link to={"/adminDashboard/viewCourse"}>View Course</Link></li><br />
                <li><Link to={"/"}>Home</Link></li>
                </ul>
                </article>
        </section>
    </>
  )
}

export default AdminSidebar