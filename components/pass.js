import Link from 'next/link';
import Badge from '@mui/material/Badge';
export default function Checkout({username}){
    console.log(username);
   
    return(
<nav className="nav-2">
<Link href={`/${username}`} ><a className="   nav__link "><i className="material-icons nav__icon">home</i><span className="nav__text">home</span></a></Link>
   
   
   <Link href={`/${username}/cart`} ><a className="nav__link nav__link--active"><i className="material-icons nav__icon">shopping_cart</i>
   <span className="nav__text">cart</span></a></Link>
   
  
   <Link href={`/${username}/account`}><a  className="nav__link"><i className="material-icons nav__icon">person</i>
   <span className="nav__text">Account</span>
</a></Link>
</nav>
  
    );
}