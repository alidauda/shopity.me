import {useState} from "react";
import { useAuth, fi } from "lib/firebase.js";
import { useRouter } from "next/router";
export default function  CreateAccount() {
    const routes=useRouter();
    const auth = useAuth();
    const [number,setNumber]=useState("")
    const[otp,setOtp] = useState("")
    const [loader,setLoader] = useState(false);
    const [otpPage,setOtpPage] = useState(false);
    function setUpRecaptcha() {
        window.recaptchaVerifier = new fi.RecaptchaVerifier("recaptcha-container", {
          size: "invisible",
          callback: function (response) {
            console.log("Captcha Resolved");
            onSignInSubmit();
          },
          defaultCountry: "IN",
        });
      }
      function onSignInSubmit( ) {
        
        setLoader(true);
        setUpRecaptcha();
        let phoneNumber = "+234" + number;
        console.log(phoneNumber);
        let appVerifier = window.recaptchaVerifier;
    
        auth
          .signin(phoneNumber, appVerifier)
          .then(function (confirmationResult) {
          
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
           
            window.confirmationResult = confirmationResult;
            // console.log(confirmationResult);
            console.log("OTP is sent");
            setOtpPage(true);
            setLoader(false);
          })
          .catch(function (error) {
            setLoader(false);
            console.log(error);
          });
      }
    
      function onSubmitOtp() {
       
        setLoader(true);
        let otpInput = otp;
        let optConfirm = confirmationResult;
        // console.log(codee);
    
        auth
          .confirm(otpInput)
          .then(function (result) {
            // User signed in successfully.
            // console.log("Result" + result.verificationID);
            routes.push("/admin")
            setLoader(false);
          })
          .catch(function (error) {
            console.log(error);
            
            alert("Incorrect OTP");
            setLoader(false);
          });
      }
    return(
       <div>
           
           <div className="min-h-screen bg-bg flex flex-col justify-center py-12 px-6 lg:px-8">
       <div className="sm:mx-auto sm:w-full sm:max-w-md">
         
        {!otpPage? <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>:<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Enter Your Otp Code</h2>}
         {!otpPage?<p className="mt-2 text-center text-sm text-gray-600 max-w">
           Already registered?
           <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sign in</a>
         </p>:<div></div>}
       </div>
     
       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
         <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
         <div id="recaptcha-container"></div>
           {!otpPage?<form className="mb-0 space-y-6" onSubmit={(e)=>{
               e.preventDefault();
               onSignInSubmit();
           }}>
             <div>
               <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
               <div className="mt-1">
                 <input id="phonenumber" name="phonenumber" type="text"  required onChange={(e)=>setNumber(e.target.value)}  />
               </div>
             </div>
     
           
     
            
     
             <div className="flex items-center">
               <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" className="" />
               <label htmlFor="terms-and-privacy" className="ml-2 block text-sm text-gray-900"
                 >I agree to the
                 <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms</a>
                 and
                 <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
               </label>
             </div>
     
             {!loader?<div>
               <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-normal hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
             </div>:<div className=" flex justify-center items-center">
  <div className="animate-spin rounded-full h-9 w-9 border-b-2 border-hover"></div>
</div>}
           </form>:<form className="mb-0 space-y-6" onSubmit={(e)=>{
                e.preventDefault();
                onSubmitOtp();
            }}>
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">Otp</label>
                <div className="mt-1">
                  <input id="otp" name="otp" type="text"  required onChange={(e)=>setOtp(e.target.value)}  />
                </div>
              </div>
      
           
      
             
      
              <div className="flex items-center">
                <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" className="" />
                <label htmlFor="terms-and-privacy" className="ml-2 block text-sm text-gray-900"
                  >I agree to the
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms</a>
                  and
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
                </label>
              </div>
      
              {!loader?<div>
               <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-normal hover:bg-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
             </div>:<div className=" flex justify-center items-center">
  <div className="animate-spin rounded-full h-9 w-9 border-b-2 border-hover"></div>
</div>}
            </form>}
         </div>
       </div>
     </div></div>
      
    );
}