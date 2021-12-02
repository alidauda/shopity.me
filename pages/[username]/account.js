import { firestore, getUserWithUsername, postToJSON,auths } from '../../lib/firebase';
import AccountPage from '../../components/AccountPage.js'
import Link from 'next/link';
import Cookie from 'js-cookie';
export async function getServerSideProps({query}) {
    const{ username}=query;
    const userDoc= await getUserWithUsername(username);
    if (!userDoc) {
     return {
       notFound: true,
     };
   }
   let item=Cookie.get("uuid");
   let user=null;
   let post =null;
   if(userDoc){
       user=userDoc.data();
      
 const postQuery=userDoc.ref.collection('orders').where('userUID','==',item);
   post=(await postQuery.get()).docs.map(postToJSON)
     }
    return {
       props: {user,post}, // will be passed to the page component as props
     }
   }


export default function Test({user,post}){
    console.log(item);
      
    return auths.currentUser?<>
    
    
    <nav className="nav-2 "> 

    <Link href={`/${user.shopname}`} ><a className="   nav__link "><i className="material-icons nav__icon">home</i><span className="nav__text">home</span></a></Link>
   
   
    <Link href={`/${user.shopname}/cart`}><a className="nav__link "><i className="material-icons nav__icon">shopping_cart</i>
    <span className="nav__text">cart</span></a></Link>
    
    <Link href={`/${user.shopname}/account`} ><a className="   nav__link nav__link--active"><i className="material-icons nav__icon">person</i><span className="nav__text">account</span></a></Link>
    
 </nav>
 
    </>:<>
    <div className="container-fluid  mt-5">
    <p className="fs-2 text-center">Please u need to sign in</p>
</div>
<div className="container-fluid  mt-5">
    <button type="button" className="btn btn-primary" onClick={()=>{window.location='/ent'}}>Sign in</button>
</div>
    <AccountPage user={user}/>
    </>;

}
