import Link from 'next/link';
export default function BottomNav({user}){
    console.log(user.username);
    return(

      <nav class="nav">

    <Link href={`/${user.username}`} ><a class="   nav__link nav__link--active"><i class="material-icons nav__icon">home</i><span class="nav__text">home</span></a></Link>
   
   
    <Link href={`/${user.username}/cart`} ><a class="nav__link "><i class="material-icons nav__icon">shopping_cart</i>
    <span class="nav__text">cart</span></a></Link>
    
   
    <Link href={`/${user.username}/account`}><a  class="nav__link"><i class="material-icons nav__icon">person</i>
    <span class="nav__text">Account</span>
 </a></Link>
 </nav>
 
  
    );
}