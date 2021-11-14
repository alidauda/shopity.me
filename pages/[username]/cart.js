import { firestore,auths,getUserWithUsername } from '../../lib/firebase';
import { v4 as uuidv4 } from 'uuid';
import   PostFeed from '../../components/PostFeed.js'

import Checkout from '../../components/pass';

import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link'
import {  useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { useRouter } from 'next/router'
import { useCollection } from 'react-firebase-hooks/firestore';
import Badge from '@mui/material/Badge';
import { ChakraProvider } from "@chakra-ui/react"
export default function CheckState({username}){
 return auths.currentUser?<Cart username={username}/>:<>
 <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal </p>
            <p><span>&#8358;</span></p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6 ml-20">
          <button type="button" className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"  >Continue<span aria-hidden="true"> &rarr;</span></button>
           
          </div>
          <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
            <p>
              or <button type="button" className="text-indigo-600 font-medium hover:text-indigo-500" >Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
            </p>
          </div>
        </div>
       
  
        <nav className="nav-2">
  <Link href={`/${username}`} ><a className="   nav__link "><i className="material-icons nav__icon">home</i><span className="nav__text">home</span></a></Link>
     
     
     <Link href={`/${username}/cart`} ><a className="nav__link nav__link--active"> <i className="material-icons nav__icon">shopping_cart</i>
     <span className="nav__text">cart</span></a></Link>
     
    
    
  </nav>
        
 </>
}
  function Cart({username}){
  const  nameRef= React.useRef();
  const phoneNumberRef= React.useRef();
  const addressRef= React.useRef();
  const[show,setShow]=useState(false);
  
    
    const ref = firestore.collection('cart').doc(auths.currentUser.uid).collection(username);
      const items = ref.orderBy('createdAt');
      
      
      const [querySnapshot] = useCollection(items)
    let total=0
    let quantity=0;  
    let name;
    let slug;
      const post = querySnapshot?.docs.map((doc) => doc.data());
      if(post){
        for (let i = 0; i < post.length; i++) { 
  name = post[i].name
  slug = post[i].slug
          total+=(post[i].amount);
          quantity+=(post[i].quantity);
          
        }
      }
      
    
  
        const config = {
       reference: (new Date()).getTime().toString(),
       email: "alidauda14@gmail.com",
       amount: parseInt((total)+"00"),
       publicKey: 'pk_live_390f110907a4284f7f6d43e6c7b8950bd270c870', 
       subaccount:"ACCT_nzdh6dzcnjay3v9",
       bearer:"subaccount",
  
      
      
       
   };
  const onSuccess = async (reference) => { 
    
//     var orderId=uuidv4();
      
      
     
      
//     const ref =await  firestore.collection('orders').doc(auths.currentUser.uid).set({
// name
//     })
//  const add= await  firestore.collection('orders').doc(auths.currentUser.uid).collection("userOrders").doc(orderId).set({
//       name,
//   orderId,
//   "status":"received",

// post

//     });
//     const userDoc= await getUserWithUsername(username);
    
//     const remove = firestore.collection('cart').doc(auths.currentUser.uid).collection(username).doc(slug).delete();
    

setShow(false)
    alert('done');
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
   };
  
   
  
  
   const onClose =() => {
    
   }
   const initializePayment = usePaystackPayment(config);
   async function MakeEwok(){
    
     setShow(true)
    } 
    async function Pay(e){
      e.preventDefault();
      initializePayment(onClose,onSuccess)
      
    }
      function Page(){
        return(
        
        <main>
              
  <div className="bg-indigo-400 w-full fixed">
  <button onClick={()=>setShow(false)} ><a className="m-2 my-8 "><ArrowBackIcon/></a></button>
  </div>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          
          <h2 className=" text-center text-3xl font-extrabold text-gray-900">Fill in your Contact Address</h2>
          
        </div>
      
        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form className="mb-0 space-y-6" onSubmit={Pay} >
              <div>
                <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Name</label>
                <div className="mt-1">
                  <input  name="Name" type="Text"  required className="" ref={nameRef} />
                </div>
              </div>
      
              <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="mt-1">
                  <input  name="number" type="number"  required className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" ref={phoneNumberRef}/>
                </div>
              </div>
      
              <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-700">Address</label>
                <div className="mt-1">
                  <input  name="address" type="text"  required className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" ref={addressRef} />
                </div>
              </div>
      
              <div className="flex items-center">
               
                <label htmlFor="terms-and-privacy" className="ml-2 block text-sm text-gray-900"
                  > By Clicking on this I agree to the
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms</a>
                  and 
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
                </label>
              </div>
            
              <div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Checkout&nbsp;&nbsp; <span>  &#8358;</span>{total}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </main>);
      } 
      
       return show?<Page />:
        
         <main>
     
        <PostFeed posts={post}  user={username} />
       
        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal </p>
            <p><span>&#8358;</span>{total}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6 ml-20">
          <button type="button" className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" onClick={MakeEwok} >Continue<span aria-hidden="true"> &rarr;</span></button>
           
          </div>
          <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
            <p>
              or <button type="button" className="text-indigo-600 font-medium hover:text-indigo-500" >Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
            </p>
          </div>
       
       
        </div>
        
       
  
        <nav className="nav-2">
  <Link href={`/${username}`} ><a className="   nav__link "><i className="material-icons nav__icon">home</i><span className="nav__text">home</span></a></Link>
     
     
     <Link href={`/${username}/cart`} ><a className="nav__link nav__link--active">{quantity==0? <i className="material-icons nav__icon">shopping_cart</i>:<Badge badgeContent={quantity} color="primary"><i className="material-icons nav__icon">shopping_cart</i> </Badge>}
     <span className="nav__text">cart</span></a></Link>
     
    
    
  </nav>
        
       
        </main>
        
       ;
  
  }
  
  
     CheckState.getInitialProps = async ({ query }) => {
    
    const {username} = query
    
    return {username}
  }
     