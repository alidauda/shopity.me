import Link from 'next/link';
export default function BottomNav({user}){
    console.log(user.username);
    return(

      <nav className="nav">

    <Link href={`/${user.username}`} ><a className="   nav__link nav__link--active"><i className="material-icons nav__icon">home</i><span className="nav__text">home</span></a></Link>
   
   
    <Link href={`/${user.username}/cart`} ><a className="nav__link "><i className="material-icons nav__icon">shopping_cart</i>
    <span className="nav__text">cart</span></a></Link>
    
   
    <Link href={`/${user.username}/account`}><a  className="nav__link"><i className="material-icons nav__icon">person</i>
    <span className="nav__text">Account</span>
 </a></Link>
 </nav>
 
  
    );
}