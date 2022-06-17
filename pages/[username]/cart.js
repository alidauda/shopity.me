import { firestore,useAuth,getUserWithUsername,serverTimestamp } from 'lib/firebase';
import { v4 as uuidv4 } from 'uuid';
import   PostFeed from 'components/PostFeed.js'
import * as React from 'react';

import Link from 'next/link'
import {  useState } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { useCollection } from 'react-firebase-hooks/firestore';

import Cookie from 'js-cookie';
import { useRouter } from 'next/router'
export default function CheckState({username,userDoc}){
  const{userId} =useAuth();
 return userId?<Cart username={username}/>:<>
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
    const{userId} =useAuth();
  const  nameRef= React.useRef();
  const phoneNumberRef= React.useRef();
  const addressRef= React.useRef();
  const[show,setShow]=useState(false);
  const[see,setSee]=useState(false);
  const emailRef=React.useRef();
  const router = useRouter()
    
    const ref = firestore.collection('cart').doc(userId).collection(username);
      
      
      const [querySnapshot] = useCollection(ref);
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
        publicKey: 'pk_test_37335d37c9fb118d8a917de0a58a8efde1bb96c4', 
        subaccount:"ACCT_q7qaqe5hqxhgn7s",
        bearer:"subaccount",
   
       
       
        
    };
    
  const onSuccess = async (reference) => { 
   
    
     
   
    
    console.log("sss");
      const usename=nameRef.current.value;
      const address=addressRef.current.value;
      const email=emailRef.current.value;
      const phoneNumber=phoneNumberRef.current.value;
     let alt;
     let amount;
     let image;
     let nam;
     let quan;
     let slu;
     let title;
     
     for (let i = 0; i < post.length; i++) { 
      alt=post[i].alt;
      amount=post[i].amount;
      image=post[i].image;
      nam=post[i].name;
      quan=post[i].quantity;
      slu =post[i].slug;
      title=post[i].title;
      let shopid=post[i].shopid;
      let token=post[i].token;
      var orderId=uuidv4();
 await firestore.collection('o').doc(orderId).set({
        orderId,
        alt,
        'total':amount,
       price: amount,
        image,
        name,
         "quantity":quantity,
         slug,
        title,
        phoneNumber,
        usename,
        address,
        createdAt: serverTimestamp(),
        shopid,
        "buyerId":"vOITooeyQ3h2z43fo9Mdso1xlUS2",
        token,
        
         "status":"pending",
        
       
       
       
  
      
    
          });
          const remove = firestore.collection('cart').doc(userId).collection(username).doc(slu).delete();
          Cookie.set(slu,0)  
            
          console.log('remove');
        setShow(false)
        
     }
       
       
    
   
    
     
          
        
    
    const ref =await  firestore.collection('orders').doc(auths.currentUser.uid).set({
name
    })

 

  
    const userDoc= await getUserWithUsername(username);
    
 
    


    // Implementation for whatever you want to do with reference and after success call.
    
   };
  
   
  
  
   const onClose =async(reference) => {
     console.log(reference)
  //    if(reference.status ==="success"){
  //     const userDoc= await getUserWithUsername(username);
     
   
    
    
  //     const usename=nameRef.current.value;
  //     const address=addressRef.current.value;
  //     const email=emailRef.current.value;
  //     const phoneNumber=phoneNumberRef.current.value;
  //    let alt;
  //    let amount;
  //    let image;
  //    let nam;
  //    let quan;
  //    let slu;
  //    let title;
   
  //     for (let i = 0; i < post.length; i++) { 
  //       let statuss=reference.status;
  //       let referenc=reference.reference;
  //       let transaction=reference.transaction;
  //       let message=reference.message;
  //       let trans=reference.trans;
  //       let trxref=reference.trxref;
  //      var orderId=uuidv4();
  //     let  buyerId=userId;
  //      const phoneNumber=phoneNumberRef.current.value;
  //      const usename=nameRef.current.value;
  //     const address=addressRef.current.value;
  //     const email=emailRef.current.value;
  //      alt=post[i].alt;
  //      amount=post[i].amount;
  //      image=post[i].image;
  //      nam=post[i].name;
  //      quan=post[i].quantity;
  //      slu =post[i].slug;
  //      title=post[i].title;
  //      let shopid=post[i].shopid;
  //      let token=post[i].token;
       
  //  firestore.collection('orders').doc(orderId).set({
  //        orderId,
  //        alt,
  //        'total':amount,
  //       price: amount,
  //        image,
  //        name,
  //         "quantity":quantity,
  //         slug,
  //        title,
  //        phoneNumber,
  //        usename,
  //        address,
  //        createdAt: serverTimestamp(),
  //        shopid,
  //        "buyerId":"vOITooeyQ3h2z43fo9Mdso1xlUS2",
  //        token,
  //        statuss,
  //        referenc,
  //        transaction,
  //         "status":"pending",
  //         message,
  //         trans,
  //         trxref,
        
        
        
   
       
     
  //          });
  //          const remove = firestore.collection('cart').doc(userId).collection(username).doc(slu).delete();
  //          Cookie.set(slu,0)  
             
             
  //        setShow(false)
  //        setSee(true);
  //        console.log(reference);
  //     }

  //    }
  //  console.log("kkkk");
    
  };
  //  function Lol(){
  //   setSee(false);
  //   router.push(`/${username}`)
  //  }
   async function MakeEwok(){
    
     setShow(true)
    }
    const initializePayment = usePaystackPayment(config);      
    async function Pay(e){
      e.preventDefault();
      
   
      initializePayment(onClose,onSuccess)
      
    }
      function Page(){
        return(
        
        <main>
              
  <div className="bg-indigo-400 w-full fixed">
  <button onClick={()=>setShow(false)} ><a className="m-2 my-8 "></a></button>
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
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                  <input  name="Email" type="email"  required className="" ref={emailRef} />
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
      
       return show?<Page />:see?<div className="border-t border-gray-200 py-6 px-4 sm:px-6">
       <div className="flex justify-between text-base font-medium text-gray-900">
        
       </div>
       
       <div className="mt-6 ml-20">
       <button type="button" className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" onClick={Lol
         
       } >HOME<span aria-hidden="true"> &rarr;</span></button>
        
       </div>
       <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
         
       </div>
     </div>
       :
        
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
     
     
     <Link href={`/${username}/cart`} ><a className="nav__link nav__link--active"> <i className="material-icons nav__icon">shopping_cart</i>
     <span className="nav__text">cart</span></a></Link>
     
    
    
  </nav>
        
       
        </main>
        
       ;
  
  }
  
  
     CheckState.getInitialProps = async ({ query }) => {
    
    const {username} = query
    try{
     //
      return {username}
    }catch(e){
      
      return {username,e}
    }
    
  }
     