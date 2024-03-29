import { useEffect, useState,useContext } from 'react';



import * as React from 'react';



import{useAuth,serverTimestamp, getUserWithUsername,firestore}from './../lib/firebase.js';


import Link from 'next/link';
import BottomNav from './BottomNav.js';

import Cookie from 'js-cookie';
import { useRouter } from 'next/router'
import { setItem } from 'localforage';
export default function IndexPageFeed({user,posts}){
    
    return posts ? posts.map((post) =><IndexPduct p={posts} post={post}  user={user} key={post.slug}/>):null;
}

  

  
 
 
 function IndexPduct({post,user,props}){
   const{userId} =useAuth();
  let name=user.shopname;
  let slug=post.slug;
  let title=post.title;
  let image=post.images[0];
  let alt=post.alt;

  let totalQuantity=0;
  const router = useRouter()
  firestore.collection('users')
  
  const [items, setitems] = useState(parseInt(Cookie.get(post.slug)));
  
const[cartItems, setcartItems] =useState(parseInt(Cookie.get(post.slug)))


  
  const [open,setOpen]=useState(false);
  let show=false;
  async function handleOpen   () { 
  
    const token=user.token;
    const shopid=post.shopid;
    console.log("ppppp");
 

    if(userId ) {
      Cookie.set(post.slug, 1);
      var num=parseInt(Cookie.get(post.slug));
       let tot=0;
       tot+=num;
       
     
      const ref = firestore.collection('cart').doc(userId).collection(user.shopname).doc(post.slug).set({
              name,
              title,
              image,
              alt,
              "quantity":num,
              "amount":post.price,
              
    
      
      slug,
      token,
      shopid
      
            });
            
           
      

            setcartItems(tot);     
     setitems(num);

      
      show=true;
     
     

      
      alert("Item added");
      
    }else{
      window.location.replace("/ent")
      
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
  
 
 
 if(post.quantity===0){
   show=false;
   Cookie.set(post.slug,0);
 }
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
  const ref =await firestore.collection('cart').doc(userId).collection(user.shopname).doc(post.slug).update({
    "quantity":counte,
    "amount":post.price*counte,

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

  if(counte>1){

    counte=counte-1;
    
    const ref =await firestore.collection('cart').doc(userId).collection(user.shopname).doc(post.slug).update({
    "quantity":counte,
    "amount":post.price*counte,

  })
  Cookie.set(post.slug,counte);

  const val =parseInt(Cookie.get(post.slug));
  tot+=val;
  setitems(val)
  
  }else if(counte==1){
    counte=counte-1;
    const ref =await firestore.collection('cart').doc(userId).collection(user.shopname).doc(post.slug).delete().then(()=>{
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
                <Link href={`/${post.username}/${post.slug}`}><img src={post.images[0]} alt={post.alt} className="w-full h-full object-center object-cover"/></Link>
              </div>

              <div className="ml-4 flex-1 flex flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>

                      
                        {post.title}
                      
                    </h3>
                    <p className="ml-4">
                    <span>&#8358;</span>{post.price}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                  per 1 piece
                  </p>
                  
                </div>
                <div className="flex-1 flex items-end justify-between text-sm">
                  <p className="text-gray-500">
                  {items?items:""}
                  </p>

                  <div className="flex">
                  {post.quantity===0?<p className="text-red-600">out of stock</p>: <ShowButton id={post.slug}/>}
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


      
      