;
import * as React from 'react';


import {  useState,useContext } from 'react';


export default function PostFeed({ posts, user }) {
  
  
  
  
//   async function AddItems(){
//     console.log("items added")
//   //  const userDoc=await  getUserWithUsername(user.username);
//   //  const postQuery= await userDoc.ref.collection("oddddd").add({
     
//   //    posts

//   //  })
//   setOpen(true);
//   }
    
//   const handleClose = () => setOpen(false);
 
//    const config = {
//      reference: (new Date()).getTime().toString(),
//      email: "alidauda14@gmail.com",
//      amount: parseInt((total)+"00"),
//      publicKey: 'pk_live_390f110907a4284f7f6d43e6c7b8950bd270c870', 
//      subaccount:"ACCT_nzdh6dzcnjay3v9",
//      bearer:"subaccount",

    
    
     
//  };
// const onSuccess = (reference) => {   // Implementation for whatever you want to do with reference and after success call.
//   console.log(reference);
//  };

 


//  const onClose = () => {
  
//  }
//  const initializePayment = usePaystackPayment(config);
// // initializePayment(onSuccess, onClose)


// let p=0;

  return posts ? posts.map((post) =><PostItem post={post} key={post.slug}  />
) : null;
}

function PostItem({ post,user }) {
  const [open,setOpen]=useState(false);
  

  

let total=0;
function changeState(){
  setShow(true);
}
//   const config = {
//     reference: (new Date()).getTime().toString(),
//     email: "user@example.com",
//     amount: parseInt((total+=post.amount)+"00"),
//     publicKey: 'pk_live_390f110907a4284f7f6d43e6c7b8950bd270c870', 
//     subaccount:"ACCT_nzdh6dzcnjay3v9",
//     bearer:"subaccount",

    
    
     
// };

// const onSuccess = (reference) => {
//   // Implementation for whatever you want to do with reference and after success call.
//   console.log(reference);
// };
// const onClose = () => {
//   // implementation for  whatever you want to do when the Paystack dialog closed.
//   console.log('closed')
// }

 
// const initializePayment = usePaystackPayment(config);

  return (
    <React.Fragment>
    <main>
      
    <div className="    w-screen max-w-md ">
    
    <div className="  ">
     
      <div className=" ">
        <div className="flow-root mr-2">
          <ul role="list" className="mr-8 divide-y divide-gray-200">
            <li className="py-6 flex ">
              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                <img src={"/add.jpg"} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="w-full h-full object-center object-cover"/>
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
                  Qty {post.quantity}
                  </p>

                  <div className="flex">
                  
                  </div>
                </div>
              </div>
            </li>

                      
          </ul>
        </div>
      </div>


    
  </div>
</div>


<div>
 


     
</div>   
<div>


</div>
</main>
</React.Fragment>
  );
  
}
