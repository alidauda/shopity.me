import { firestore, getUserWithUsername, postToJSON } from '../../lib/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import   PostFeed from '../../components/PostFeed.js'
import StickyFooter from '../../components/StickyFooter';
import Checkout from '../../components/pass';
import BottomNav from '../../components/BottomNav';
import Botton from '../../components/bottonca';
import Button from '@mui/material/Button';
import * as React from 'react';
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
     
    
     return (
       <main>
      <PostFeed posts={post}  user={user} />
     
     

      

      
     
      </main>
     );
   }