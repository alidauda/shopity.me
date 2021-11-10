import Link from 'next/link';
import Badge from '@mui/material/Badge';
export default function BottomNav({user,items}){
    console.log(user.username);
    return(

      <nav className="nav-2 ">

    <Link href={`/${user.username}`} ><a className="   nav__link nav__link--active"><i className="material-icons nav__icon">home</i><span className="nav__text">home</span></a></Link>
   
   
    <Link href={`/${user.username}/cart`} ><a className="nav__link ">{items==0? <i className="material-icons nav__icon">shopping_cart</i>:<Badge badgeContent={items} color="primary"><i className="material-icons nav__icon">shopping_cart</i> </Badge>}
    <span className="nav__text">cart</span></a></Link>
    
   
    <Link href={`/${user.username}/account`}><a  className="nav__link"><i className="material-icons nav__icon">person</i>
    <span className="nav__text">Account</span>
 </a></Link>
 </nav>
 
  
    );
}