import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

import Main from "../components/Main";

import Footer from '../components/Footer'
import Header from '../components/Header'
// import Head from '../components/Head'
import Form from '../components/CreateForm'
import LoginForm from "../components/LoginForm";



export default function Home() {



  return (
    <div className={styles.container}>
      {/* <Head/> */}

      <Header/>

      <main/>

        <Form/>
        (tokens) ? <Main /> : <LoginForm />
 
      
     <Footer/>

    </div>
  )
}
