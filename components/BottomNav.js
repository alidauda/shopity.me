import Link from 'next/link';

export default function BottomNav({user,items}){
    console.log(user.shopname);
    return(

      <nav className="nav-2 "> 

    <Link href={`/${user.shopname}`} ><a className="   nav__link nav__link--active"><i className="material-icons nav__icon">home</i><span className="nav__text">home</span></a></Link>
   
   
    <Link href={`/${user.shopname}/cart`}><a className="nav__link "><i className="material-icons nav__icon">shopping_cart</i>
    <span className="nav__text">cart</span></a></Link>
    
    <Link href={`/${user.shopname}/account`} ><a className="   nav__link "><i className="material-icons nav__icon">person</i><span className="nav__text">account</span></a></Link>
    
 </nav>
 
  
    );
}