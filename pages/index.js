import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';
import { useRouter } from "next/router";
import BottomNav from '../components/BottomNav';



export default function Home() {
   
  
  
  return (
    <div > 
      <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand">Navbar</a>
      <form className="d-flex justify-content-center" >
        <input className="form-control me-3 w-100" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <div className="flex flex-row ...">
  <div className="w-1/4 bg-red-400 hidden lg:block">1</div>
  <div className="lg:w-1/2  flex-grow">
    <div className="flex flex-row  mx-2 my-2">
    <img className="object-contain object-center bg-gray-200 w-24 h-24 rounded" src={"/add.jpg"}/>
  <div className=" flex-grow ">
  <div className="flex flex-col  mx-2">
  <p className="font-sans antialiased text-base font-semibold tracking-tight my-2">
  The quick brown fox jump
</p>
  <p className="text-xs subpixel-antialiased not-italic font-normal tracking-wide">per piece</p>
  <div>
  <div class="flex flex-row flex-nowrap">
  <div className="w-1/2 ">1</div>
  
  <div className="flex-grow "><button className="ring-0  rounded border-1 border-blue-300  ml-10 " type="button"> ADD +</button></div>
</div>
  </div>
</div>
    </div>
    </div>
  
  
  
  
  
  
  </div>
  <div className="w-1/4 bg-yellow-500  hidden lg:block">3</div>
</div>
    </div>
  )
}
