
export default function Test(){
    function goBack() {

        window.history.back();
      
        }
      
    return (
        <div>
            <button onClick={goBack}>Go Back</button> 
        </div>
    );

}
// import Link from 'next/link';


// export default function Account({user}){
//     console.log(user.username);
  
//     return(
// <div><div class="container-fluid fixed-bottom d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-xxl-block d-xxl-none">
// <div class="container">
//   <div class="row">
//     <div class="col">

//     <Link href={`/${user.username}`} ><a class="   nav__link"><i class="material-icons nav__icon">dashboard</i><span class="nav__text">Dashboard</span></a></Link>
//     </div>
//     <div class="col ">
//     <Link href={`/${user.username}/cart`} ><a class="nav__link nav__link--active"><i class="material-icons nav__icon">person</i>
//     <span class="nav__text">Profile</span></a></Link>
//     </div>
//     <div class="col">
//     <Link href={`/${user.username}/account`}><a  class="nav__link"><i class="material-icons nav__icon">devices</i>
//     <span class="nav__text">Devices</span>
//  </a></Link>
//     </div>
//   </div>
// </div>
// </div></div>
//     );
// }