export default function Footer({username}) {


    return(
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
<p className="font-sans text text-white m-0 antialiased font-light " >{username}.me</p>  
</div>

        </div>
    );
}