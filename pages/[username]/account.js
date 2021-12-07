import { useAuth } from '../../lib/firebase';
import AccountPage from '../../components/AccountPage.js'
import Link from 'next/link';

;



export default function Test({username}){

    const {userId}=useAuth();
      
    return userId?<>
    <Authe username={username} />
    
    
    
 
    </>:<>
    <div className="container-fluid  mt-5">
    <p className="fs-2 text-center">Please u need to sign in</p>
</div>
<div className="container-fluid  mt-5">
    <button type="button" className="btn btn-primary" onClick={()=>{window.location='/ent'}}>Sign in</button>
</div>
    <AccountPage user={username}/>
    </>;

}

function Authe({username}){
  

  return(
    <div>
<div className="flex flex-col ">
  <div className="bg-red-700 p-3">Sign OUt</div>
  <Link href={`/${username}/orders`}><div  className="bg-gray-400 p-3 text-align: center"><span className="material-icons">
layers
</span>Orders</div></Link>
  
</div>
    <nav className="nav-2 "> 

    <Link href={`/${username}`} ><a className="   nav__link "><i className="material-icons nav__icon">home</i><span className="nav__text">home</span></a></Link>
   
   
    <Link href={`/${username}/cart`}><a className="nav__link "><i className="material-icons nav__icon">shopping_cart</i>
    <span className="nav__text">cart</span></a></Link>
    
    <Link href={`/${username}/account`} ><a className="   nav__link nav__link--active"><i className="material-icons nav__icon">person</i><span className="nav__text">account</span></a></Link>
    
 </nav>
 </div>
  );
}
Test.getInitialProps = async ({ query }) => {
    
  const {username} = query
  try{
   //
    return {username}
  }catch(e){
    
    return {username,e}
  }
  
}