import { useEffect, useState } from 'react';
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
import Cookie from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

import Link from 'next/link';
import BottomNav from '../../components/BottomNav.js';


import { getUserWithUsername ,postToJSON,auths,serverTimestamp} from "../../lib/firebase";
import Metatags from '../../lib/Metatags';
import IndexPageFeed from '../../components/IndexPage.js';


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
  let path;
  
  if(userDoc){
      user=userDoc.data();
    
const postQuery=userDoc.ref.collection('post').where('published','==',true).orderBy('createdAt','desc');

 
  post=(await postQuery.get()).docs.map(postToJSON)
  
    }
   return {
      props: {user,post}, // will be passed to the page component as props
    }
  }

export default function UserProfilePage({user,post}){
 
   return(<main>
 <Metatags title={user.username} description={user.description} image={user.image}/>   
<IndexPageFeed user={user} posts={post}/>
<div className="min-h-screen bg-gray-800 flex flex-col  ">
        <div className=" h-96  " > <div className=" my-3 mx-3 h-32  text-center  justify-center">
        <div className="my-2"><i className="material-icons text-red-400 m-0 ">
payments
</i> 
<p className="font-sans text text-white m-0 font-light " >Payment Options</p>
<p className="font-sans text-white m-0 font-light">Online</p>
</div>
        </div>
  <div className="h-32  my-3 mx-3 text-center  justify-center"><i className="material-icons text-red-400 m-0">
  support_agent
</i>
<p className="font-sans text text-white m-0 antialiased font-light" >Customer Support</p> 
<p className="font-sans text text-white m-0 antialiased font-light" >24/7</p> 
<p className="font-sans text-white m-0 antialiased font-light">09060390088</p></div>
  <div className="h-32  my-3 mx-3  text-center  justify-center"><i className="material-icons text-red-400 m-0">
  local_shipping
</i>
<p className="font-sans text text-white m-0 antialiased font-light" >Shipping</p>  
<p className="font-sans text-white m-0 antialiased font-light">about 1-3 days for those in abuja</p></div></div>
<hr className="border-2 border-red-900 border-solid "/>
<div className="h-32  my-3 mx-3 text-center  justify-center ">
<p className="font-sans text text-white m-0 antialiased font-light uppercase" >Store Details</p> 
<p className="font-sans text text-white m-0 antialiased font-light " >{user.username}.me</p>  
</div>

        </div>
</main>
   ) ;

   
}