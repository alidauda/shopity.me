import Link from 'next/link';
import Badge from '@mui/material/Badge';
export default function BottomNav({user,items}){
    console.log(user.username);
    return(

      <nav className="nav-2 "> 

    <Link href={`/${user.username}`} ><a className="   nav__link nav__link--active"><i className="material-icons nav__icon">home</i><span className="nav__text">home</span></a></Link>
   
   
    <Link href={{pathname:`/${user.username}/cart`,query:{name:user.username}}} ><a className="nav__link ">{items? <Badge badgeContent={items} color="primary"><i className="material-icons nav__icon">shopping_cart</i> </Badge>:<i className="material-icons nav__icon">shopping_cart</i>}
    <span className="nav__text">cart</span></a></Link>
    
   
    
 </nav>
 
  
    );
}