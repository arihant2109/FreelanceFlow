import React from 'react'
import Link from 'next/link'
import styles from '../styles/SideBar.module.css'
const SideBar = () => {
  return (
    <div className={styles["sideBar-container"]}>
      <ul className={styles["list-items"]}>
       <Link href="/dashboard"><li>Dashboard</li></Link> 
       <Link href="/clients"><li>Clients</li></Link> 
       <Link href="/projects"><li>Projects</li></Link> 
       <Link href="#"><li>Invoices</li></Link> 
       <Link href="#"><li>Payments</li></Link>
       <Link href="/prompt"><li>Prompt</li></Link>  
       <Link href="#"><li>Settings</li></Link>         
      </ul>
    </div>
  )
}

export default SideBar
