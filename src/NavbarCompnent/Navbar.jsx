import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import styles from "./navbaar.module.css"
import Icons from "./Icons";
// import bg from "../Images/bg1.webp"

const Navbar=()=>{
    return(
        
            // <section id={styles.pagebg}>
        <section id={styles.main}>
            <article>
                <Logo/>
                <Menu/>
                <Icons/>
                
            </article>
        </section>
        //  </section>
        
    )
}
export default Navbar