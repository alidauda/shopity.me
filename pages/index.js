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

<div>
<div className="container-fluid mt-3 ">
  <div className="row">
    <div className="col bg-primary d-none d-sm-block">
      Column
    </div>
    <div className="col-sm  border border-3 bg-light">
     <div className="row gy-5">
     <div className="col  p-2">
     <img src={"/add.jpg"} className="img-fluid rounded mx-auto d-block " alt="..."/>
     {/* <img src={"/add.jpg"} className="rounded float-start" alt="..."/> */}
    </div>
    <div className="col">
    <p className="fs-4">Red bag from</p>
    <p className="fs-6">28kg</p>
<p className="fs-5">5000</p>

    </div>
    <div className="col ">
    <button type="button" className="btn  btn-lg  mt-5 ml-5 btn-primary"  >Button</button>
    </div>

       </div> 
    </div>
    <div className="col d-none d-sm-block bg-danger">
      Column
    </div>
  </div> 
</div>
</div>
<div className="container-fluid fixed-bottom d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-xxl-block d-xxl-none  bg-light">

 
 
  
 

</div>
<div>

</div>
    </div>
  )
}
