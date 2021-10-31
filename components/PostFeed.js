import Link from 'next/link';
import StickyFooter from './StickyFooter';
import Button from '@mui/material/Button';
import * as React from 'react';
import Checkout from './pass';
import {getUserWithUsername} from './../lib/firebase.js';
export default function PostFeed({ posts, user }) {
  return posts ? posts.map((post) =>
  <> 

 
  <PostItem post={post} key={post.slug}  />
  
  
  
  </>) : null;
}

function PostItem({ post }) {
  // Naive method to calc word count and read time
 

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
