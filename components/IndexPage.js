import { useEffect, useState,useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import{auths,serverTimestamp, getUserWithUsername,firestore}from './../lib/firebase.js';
import localForage from "localforage";
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';

import Link from 'next/link';
import BottomNav from './BottomNav.js';
import { UserContext, } from '../lib/context.js';
import Cookie from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

export default function IndexPageFeed({user,posts}){
    
    return posts ? posts.map((post) =><IndexPduct p={posts} post={post}  user={user} key={post.slug}/>):null;
}
function ElevationScroll(props) {
  
  
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  
 function componentWillMount() {
    
   }
 
 function IndexPduct({post,user,props,p}){
   
  

  if ( Cookie.get("asa")){
    console.log("yes")
  }else{
    console.log(false);
  }
 // const [postss] = useDocumentDataOnce(postRef);
 let show=false;
  let car = [];
  if (typeof window !== "undefined") {
    if (localStorage?.car) {
      car = JSON.parse(localStorage.car);
    }
   
 
 }
 

   
  
  // }
  // window.addEventListener('storage', this._listener, false);
    

  const [open,setOpen]=useState(false);
  async function handleOpen   (id) { 
    console.log(id);
   
    if(Cookie.get("userID")){
      let guestUserId = Cookie.get("userID");
      const userDoc= await getUserWithUsername(user.username);
      const postQuery= await userDoc.ref.collection("cart").doc(guestUserId).collection("guestUserItems").add({
        "username":"asa",
        "quantity":1,
        "amount":2000,
        "slug":id,
        

createdAt:serverTimestamp(),
updatedAt:serverTimestamp(),

      });

    }else{
      let ass=uuidv4();

   
    Cookie.set("userID",ass);
      
      const userDoc= await getUserWithUsername(user.username);
      const postQuery= await userDoc.ref.collection("cart").doc(ass).collection("guestUserItems").add({
        "username":"asa",
        "quantity":1,
        "amount":2000,
        "slug":id,
        

createdAt:serverTimestamp(),
updatedAt:serverTimestamp(),

      });
    }
    // Store
    // if(localStorage.cart)
  
  
//     let name=user.username;

//     let content="usman"
//     if(auths.currentUser){
//       const userDoc= await getUserWithUsername(user.username);
//       const postQuery= await userDoc.ref.collection("cart").doc(post.slug).set({
//         "username":name,
//         "quantity":1,
//         "amount":2000,
        
// content,
// createdAt:serverTimestamp(),
// updatedAt:serverTimestamp(),

//       });
      
//       let get=await localForage.getItem('key');

//       setOpen(true);
//       setShow(get.name);

      
//     }else{
      
//       window.location='/ent'
//       setOpen(false);
//     }
     
    
    
    }
    if (typeof window !== "undefined") {
      if (localStorage.car) {
        car =JSON.parse(localStorage.car);
       car["me"]?show=true:show=false;
    
        
      }
     
    
    }
    
      
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
 
 const [addd,setAdd]=useState(1);
 var counte=addd;
async function Addd() {
  number=counte+1;
  const userDoc= await getUserWithUsername(user.username);
  const posQuery= await userDoc.ref.collection("cart").doc(post.slug).update({
    "quantity":number,
    "amount":post.amount*number,

  })
  console.log("added")
 setAdd(counte);

}
async function Remove() {
  if(counte>=1){

    number=counte-1;
    const userDoc= await getUserWithUsername(user.username);
  const posQuery= await userDoc.ref.collection("cart").doc(post.slug).update({
    "quantity":number,
    "amount":post.amount/number,

  })
 setAdd(counte);
  }
  
 setAdd(counte);
}
 function UpDateQut()
{
  return (
       
    <div className="container mt-3 ml-5">
  <div className="row">
    <div className="col">
    <Button variant="contained" startIcon={<AddIcon />} onClick={Addd}>
         
      </Button>
   
    </div>
    <div className="col text-center">
      {number}
    </div>
    <div className="col">
    <Button variant="contained" startIcon={<HorizontalRuleIcon />} onClick={Remove}>
        
        </Button>
    
    </div>
  </div>
</div>
  );
} function ShowButton({id}){
  
return show?
<>

<div class="btn-group mt-3 ml-5" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">+</button>
  <p>ss</p>
  <button type="button" class="btn btn-outline-primary">-</button>
</div>
</>:

<button type="button" className="btn  btn-lg  mt-5 ml-5 btn-primary" onClick={()=>handleOpen(id)} >Button</button>;
 }
 const {number}  = useContext(UserContext);
    return(
        <React.Fragment>
        <CssBaseline />  
  
    
  <div >
  <ElevationScroll {...props}>
    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand">Navbar</a>
      <form className="d-flex justify-content-center" >
        <input className="form-control me-3 w-100" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  </ElevationScroll>
  
  <div>
  <div className="container-fluid mt-3 ">
    <div className="row">
      <div className="col bg-primary d-none d-sm-block">
        Column
      </div>
      <div className="col-sm  border border-3 bg-light">
       <div className="row gy-5">
       <div className="col  p-2">
     <Link href={`/${user.username}/${ post.slug}`} key={post.slug}><a><img src={"/add.jpg"} className="img-fluid rounded mx-auto d-block " alt="..."/></a></Link>
       {/* <img src={"/add.jpg"} className="rounded float-start" alt="..."/> */}
      </div>
      <div className="col">
      <p className="fs-5">{user.displayName}</p>
      <p className="fs-6">28kg</p>
  <p className="fs-5">{post.slug}</p>
  
      </div>
      <div className="col ">
     <ShowButton id={post.slug} />
      </div>
  
         </div> 
      </div>
      <div className="col d-none d-sm-block bg-danger">
        Column
      </div>
    </div> 
    <div>
    
    <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Enter quantity"
              type="number"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
  </div>
  </div>
   <div className=" d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-xxl-block d-xxl-none">
   <BottomNav user={user}/>
  </div> 
  <div>
  
  </div>
      </div>
          
      
      </React.Fragment>   
      );
}