import Link from 'next/link';
import StickyFooter from './StickyFooter';
import Button from '@mui/material/Button';
import * as React from 'react';
import Checkout from './pass';
import {getUserWithUsername} from './../lib/firebase.js';
export default function PostFeed({ posts, user }) {
  async function AddItems(){
    console.log("items added")
   const userDoc=await  getUserWithUsername(user.username);
   const postQuery= await userDoc.ref.collection("oddddd").add({
     
     posts

   })
  }
  let p=0;
  // for (let i = 0; i < posts.length; i++) { 
  //   p+=(posts[i].amount);
  //   console.log(p)
  // }
  console.log("done")
  return posts ? posts.map((post) =>
 
  <> 

 
  <PostItem post={post} key={post.slug}  />
  
  <nav className="nav-1">
      <div className="row align-items-start">
    <div className="col  mt-2 ml-3">
    <Button variant="contained" onClick={AddItems}  >
    button
    </Button>
    </div>
    <div className="col mt-3 ml-3">

      TOTAL
    </div>
    <div className="col mt-3 ml-3">

    <span>&#8358;</span>{p+=post.amount}
    </div>
    
  </div>


    
</nav>
<Checkout user={user}/>
      
  </>) : null;
}

function PostItem({ post }) {
 
  // Naive method to calc word count and read time
  
 

 // console.log( cart['asa'].quantity);

  return (
    
 <main>
    <div >
      
    
    <div>
    <div className="container-fluid mt-3 ">
      <div className="row">
        <div className="col bg-primary d-none d-sm-block">
          Column
        </div>
        <div className="col-sm  border border-3 bg-light">
         <div className="row gy-5">
         <div className="col  ">
       <img src={"/add.jpg"} className="img-fluid rounded mx-auto d-block " alt="..."/>
         {/* <img src={"/add.jpg"} className="rounded float-start" alt="..."/> */}
        </div>
        <div className="col">
        <p className="fs-4">{post.name}</p>
        <p className="fs-6">{post.amount}</p>
    <p className="fs-5">x{post.quantity}</p>
    
        </div>
        <div className="col ">
        
        </div>
    
           </div> 
        </div>
        <div className="col d-none d-sm-block bg-danger">
          Column
        </div>
      </div> 
      <div>
      
      
        </div>
    </div>
    </div>
      
    <div>
   
    </div>
        </div>
        
    </main>   
  );
  
}
