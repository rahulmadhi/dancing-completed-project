import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from "./sidebar.module.css"

const AdminMainbar = () => {
  return (
    <div id={styles.out}>
        <Outlet/>
    </div>
  )
}

export default AdminMainbar