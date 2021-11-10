import { firestore, getUserWithUsername, postToJSON } from '../../lib/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import   PostFeed from '../../components/PostFeed.js'
import StickyFooter from '../../components/StickyFooter';
import Checkout from '../../components/pass';
import BottomNav from '../../components/BottomNav';
import Botton from '../../components/bottonca';
import Button from '@mui/material/Button';
import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link'
import { useEffect, useState,useContext } from 'react';
import { usePaystackPayment } from 'react-paystack';
export async function getServerSideProps({query}) {
    const{ username}=query;
    const userDoc= await getUserWithUsername(username);
    if (!userDoc) {
     return {
       notFound: true,
     };
   }
   let user=null;
   let post =null;
   if(userDoc){
       user=userDoc.data();
      
 const postQuery=userDoc.ref.collection('cart').where('username','==',username);
   post=(await postQuery.get()).docs.map(postToJSON)
     }
    return {
       props: {user,post}, // will be passed to the page component as props
     }
   }

   export  default  function Cart({post,user}){
   const[show,setShow]=useState(false);
    let total=0
    for (let i = 0; i < post.length; i++) { 
      total+=(post[i].amount);
      console.log(total);
    }

      const config = {
     reference: (new Date()).getTime().toString(),
     email: "alidauda14@gmail.com",
     amount: parseInt((total)+"00"),
     publicKey: 'pk_live_390f110907a4284f7f6d43e6c7b8950bd270c870', 
     subaccount:"ACCT_nzdh6dzcnjay3v9",
     bearer:"subaccount",

    
    
     
 };
const onSuccess = (reference) => {   // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
 };

 


 const onClose = () => {
  
 }
 const initializePayment = usePaystackPayment(config);
  function MakeEwok(){
    setShow(true);
  } 
  function Pay(){
    initializePayment(onSuccess, onClose)
  }
    function Page(){
      return(<div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        
        <h2 className=" text-center text-3xl font-extrabold text-gray-900">Fill in your Contact Address</h2>
        
      </div>
    
      <div className=" sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <div className="mb-0 space-y-6" >
            <div>
              <label htmlFor="Name" className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1">
                <input  name="Name" type="Text"  required className="" />
              </div>
            </div>
    
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <div className="mt-1">
                <input  name="number" type="number"  required className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
    
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Address</label>
              <div className="mt-1">
                <input  name="address" type="text"  required className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
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
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={Pay}>Checkout&nbsp;&nbsp; <span>  &#8358;</span>{total}</button>
            </div>
          </div>
        </div>
      </div>
    </div>);
    } 
    
     return (
       <main>
         <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
 <Link href={`/${user.username}`}><a className="navbar-brand"><ArrowBackIcon/></a></Link>
  </div>
</nav>
      <PostFeed posts={post}  user={user} />
      { show?<Page />:<div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
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
      </div>}
     

      <Checkout user={user}/>

      
     
      </main>
     );
   }