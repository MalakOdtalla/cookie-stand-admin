import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'



export default function Home() {
  const initialValues = {
    location: '',
    max: 0,
    min: 0,
    avg: 0,
};

const [values, setValues] = useState(initialValues);

function submitHandler(event) {
    event.preventDefault();
    onCreate(values);
    setValues(initialValues)
}

function handleChange(event) {
    let { name, value, type } = event.target;

    if (type === "number") {
        value = parseFloat(value);
    }

    setValues({ ...values, [name]: value });
}


  return (
    <div className={styles.container}>
      <Head >
        <title >Cookie Stand</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 uppercase bg-green-500 rounded text-green hover:bg-green-600">
        <h1 className=" text-2xl">
        Cookie Stand Admin
        </h1>
      </header>

      <main className="">
       
      <form className="flex flex-col p-6 mx-20 my-5 bg-green-300 rounded-md" onSubmit={submitHandler}>
      <div className="mb-4 text-center">
        <h2 className="text-xl">Create Cookie Stand</h2>
      </div>
      <div className="flex w-full mb-4">
        <label className="pr-2">Location:</label>
        <input
          className="w-full"
          name="location"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-2 text-center">
        <div className="bg-green-200 rounded-md ">
          <label>Minimum Customers per Hour</label>
          <input
            name="minimum_customers_per_hour"
            type="number"
            onChange={handleChange}
          />
        </div>
        <div className="bg-green-200 rounded-md">
          <label>Maximum Customers per Hour</label>
          <input
            name="maximum_customers_per_hour"
            type="number"
            onChange={handleChange}
          />
        </div>
        <div className="bg-green-200 rounded-md">
          <label>Average Cookies per Sale</label>
          <input
            name="average_cookies_per_sale"
            type="number"
            onChange={handleChange}
          />
        </div>
        <button className="px-5 bg-green-400">Create</button>
      </div>
    </form>
      </main>

      <footer className="p-4 uppercase bg-green-500 rounded text-green hover:bg-green-600">
      <Link href="date">
          <a className="text-2xl" target="_blank"> 2021 </a>
        </Link>
      </footer>
    </div>
  )
}
