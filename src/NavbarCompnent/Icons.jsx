import React from "react";
import { BsFacebook } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import styles from "./navbaar.module.css"
import { AiFillInstagram } from "react-icons/ai";


const Icons=()=>{
    return(
        <div id={styles.ico}>
            <ul>
                <li className={styles.list}>
                <div><BsFacebook  className={styles.iconn}/></div>
                <span id={styles.facebook}>Facebook</span>
                </li>
                <li className={styles.list}>
                    <div><AiFillInstagram  className={styles.iconn}/></div>
                    <span id={styles.instagram}>Instagram</span>
                    </li>
                <li className={styles.list}>
                    <div><IoLogoYoutube  className={styles.iconn}/></div>
                    <span id={styles.youtube}>Youtube</span>
                    </li>
                <li className={styles.list}>
                    <div><FaTwitter  className={styles.iconn}/></div>
                    <span id={styles.twitter}>Twitter</span>
                    </li>
            </ul>
        </div>
    )
}
export default Icons