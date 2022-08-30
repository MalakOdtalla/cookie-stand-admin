import Link from 'next/link'



export default function Footer(){
     return (

        <footer className="p-4 uppercase bg-green-500 rounded text-green hover:bg-green-600">
        <Link href="date">
            <a className="text-2xl" target="_blank"> 2021 </a>
          </Link>
        </footer>
     )






};