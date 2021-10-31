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
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex justify-content-center" >
      <input class="form-control me-3 w-100" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

<div>
<div class="container-fluid mt-3 ">
  <div class="row">
    <div class="col bg-primary d-none d-sm-block">
      Column
    </div>
    <div class="col-sm  border border-3 bg-light">
     <div class="row gy-5">
     <div class="col  p-2">
     <img src={"/add.jpg"} class="img-fluid rounded mx-auto d-block " alt="..."/>
     {/* <img src={"/add.jpg"} class="rounded float-start" alt="..."/> */}
    </div>
    <div class="col">
    <p class="fs-4">Red bag from</p>
    <p class="fs-6">28kg</p>
<p class="fs-5">5000</p>

    </div>
    <div class="col ">
    <button type="button" class="btn  btn-lg  mt-5 ml-5 btn-primary"  >Button</button>
    </div>

       </div> 
    </div>
    <div class="col d-none d-sm-block bg-danger">
      Column
    </div>
  </div> 
</div>
</div>
<div class="container-fluid fixed-bottom d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-xxl-block d-xxl-none  bg-light">

 
 
  
 

</div>
<div>

</div>
    </div>
  )
}
