import { useEffect, useState,useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Container from '@mui/material/Container';
import * as React from 'react';


import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import{auths,serverTimestamp, getUserWithUsername,firestore}from './../lib/firebase.js';


import Link from 'next/link';
import BottomNav from './BottomNav.js';

import Cookie from 'js-cookie';
import { useRouter } from 'next/router'
import { setItem } from 'localforage';
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
  
 
 
 function IndexPduct({post,user,props}){
  let totalQuantity=0;
  const router = useRouter()
  firestore.collection('users')
  
  const [items, setitems] = useState(parseInt(Cookie.get(post.slug)));
  
const[cartItems, setcartItems] =useState(parseInt(Cookie.get(post.slug)))


  
  const [open,setOpen]=useState(false);
  let show=false;
  async function handleOpen   () { 
   
    
    console.log("ppppp");
 let name=user.username;
 let slug =post.slug;
let content="usman"
    if(auths.currentUser) {
      Cookie.set(post.slug, 1);
      var num=parseInt(Cookie.get(post.slug));
       let tot=0;
       tot+=num;
      
      const userDoc= await getUserWithUsername(user.username);
      const ref = firestore.collection('cart').doc(auths.currentUser.uid).collection(user.username).doc(post.slug).set({
              "username":name,
              "quantity":num,
              "amount":2000,
              
      content,
      createdAt:serverTimestamp(),
      updatedAt:serverTimestamp(),
      slug
      
            });
            
           
      

            setcartItems(tot);     
     setitems(num);

      setOpen(true);
      show=true;
     
     

      
      alert("Item added");
      
    }else{
      router.push('/ent')
      
      setOpen(false);
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
if(parseInt(Cookie.get(post.slug))>=1){
  var counte=parseInt(Cookie.get(post.slug));
  console.log(typeof counte);
  show=true;
}else{
  
  var counte=parseInt(Cookie.get(post.slug));
  show=false;
  console.log(typeof counte);
}


async function Addd() {
  
    
  let tot=0;
    
  
  counte=counte+1;
  const ref =await firestore.collection('cart').doc(auths.currentUser.uid).collection(user.username).doc(post.slug).update({
    "quantity":counte,
    "amount":post.amount*counte,

  })
  console.log("added")
 
Cookie.set(post.slug,counte);
const val =parseInt(Cookie.get(post.slug));

tot+=val;
setcartItems(tot);
setitems(val)


}

async function Remove() {
  let tot=0;

  const userDoc= await getUserWithUsername(user.username);
  if(counte>1){

    counte=counte-1;
    
    const ref =await firestore.collection('cart').doc(auths.currentUser.uid).collection(user.username).doc(post.slug).update({
    "quantity":counte,
    "amount":post.amount/counte,

  })
  Cookie.set(post.slug,counte);

  const val =parseInt(Cookie.get(post.slug));
  tot+=val;
  setitems(val)
  
  }else if(counte==1){
    counte=counte-1;
    const ref =await firestore.collection('cart').doc(auths.currentUser.uid).collection(user.username).doc(post.slug).delete().then(()=>{
      show=false;
      Cookie.set(post.slug,counte);
    });
    setitems(counte);
    var addme=parseInt(Cookie.get(post.slug));
    tot+=addme;
setcartItems(tot);
   
    
  }
 
}
function ShowButton({id}){
 
return show?<>
<div className="btn-group mt-3 " role="group" aria-label="Basic outlined example">
  <button type="button" className="btn btn-outline-primary" onClick={Addd}>+</button>
  
  <button type="button" className="btn btn-outline-primary"onClick={Remove}>-</button>
</div>
</>:<button type="button" className="font-medium text-indigo-600 hover:text-indigo-500 btn btn-primary btn-sm btn-outline  " onClick={handleOpen}>ADD</button>;

  
 

 }

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
  
  </div>
  <div>
  <div className="flex flex-row ...">
  <div className="w-1/4 bg-red-400 hidden lg:block">1</div>
  <div className="lg:w-1/2  flex-grow">
  <div className="    w-screen max-w-md ">
    
    <div className=" flex-1  overflow-y-auto ">
     
      <div className=" ">
        <div className="flow-root mr-2">
          <ul role="list" className="mr-8 divide-y divide-gray-200">
            <li className="py-6 flex ">
              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                <Link href={`/${user.username}/${post.slug}`}><img src={"/add.jpg"} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="w-full h-full object-center object-cover"/></Link>
              </div>

              <div className="ml-4 flex-1 flex flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      
                        Throwback Hip Bag
                      
                    </h3>
                    <p className="ml-4">
                    <span>&#8358;</span>{post.amount}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                  per 16 piece
                  </p>
                  
                </div>
                <div className="flex-1 flex items-end justify-between text-sm">
                  <p className="text-gray-500">
                  {items?items:""}
                  </p>

                  <div className="flex">
                   <ShowButton id={post.slug}/>
                  </div>
                </div>
              </div>
            </li>

                      
          </ul>
        </div>
      </div>


    
  </div>
</div>
  
  
  
  
  
  </div>
  <div className="w-1/4 bg-yellow-500  hidden lg:block">3</div>
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
    
  <div>
  
  </div>
  <div className=" d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-xxl-block d-xxl-none">
   <BottomNav user={user} items={cartItems}/>
  </div> 
          

  
  </React.Fragment>  
   
      );
}


      
      