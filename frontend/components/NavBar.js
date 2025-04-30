import React from 'react'
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
const NavBar = () => {


  return (
    <div className={styles["container"]}>
        <div className={styles["logo"]}>FreeLanceFlow</div>
        <div className={styles['auth-buttons']}>
          <Link href="/login" className={styles["loginButton"]}> <button >Login</button></Link>
          <Link href="/signup" className= {styles["singnupButton"]}><button >Signup</button></Link>
            
            
        </div>
    </div>
  )
}

export default NavBar
