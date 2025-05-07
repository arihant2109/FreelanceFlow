'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()


    router.push("/dashboard")
  
  return <div></div>
}

export default Home
