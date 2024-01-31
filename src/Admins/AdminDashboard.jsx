import React from 'react'
import AdminMainbar from './AdminMainbar'
import AdminSidebar from './AdminSidebar'
import styles from "./sidebar.module.css"

const AdminDashboard = () => {
  return (
    <section>
        <article id={styles.art}>
           <AdminSidebar/>
           <AdminMainbar/>
        </article>
    </section>
  )
}

export default AdminDashboard