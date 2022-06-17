import { useAuth, fi } from "/lib/firebase.js";





import { useRouter } from "next/router";
import * as React from "react";



import { useEffect, useState } from "react";



export default function PhoneLogin() {
  const auth = useAuth();
  const router = useRouter();

  const usernameRef = React.useRef();
  const OtpRef = React.useRef();

  const [currentState, setCurrentState] = useState(false);

  const [show, setshow] = useState(false);

  const [hide, setHide] = useState("");

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

  function onSignInSubmit( e ) {
    setHide("hidden");
    setshow(true);
    e.preventDefault();
    setUpRecaptcha();
    let phoneNumber = "+234" + usernameRef.current.value;
    console.log(phoneNumber);
    let appVerifier = window.recaptchaVerifier;

    auth
      .signin(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        setHide("");
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        setCurrentState(true);
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult);
        console.log("OTP is sent");
      })
      .catch(function (error) {
        setHide("");
        setshow(false);
        console.log(error);
      });
  }

  function onSubmitOtp(e) {
    e.preventDefault();
    setHide("hidden");
    let otpInput = OtpRef.current.value;
    let optConfirm = confirmationResult;
    // console.log(codee);

    auth
      .confirm(otpInput)
      .then(function (result) {
        // User signed in successfully.
        // console.log("Result" + result.verificationID);
        onClose();
      })
      .catch(function (error) {
        console.log(error);
        setHide("");
        alert("Incorrect OTP");
      });
  }

  function PPage() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className=" text-center text-3xl font-extrabold text-gray-900">
            Enter your Phone Number
          </h2>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <div id="recaptcha-container"></div>
             (
              <form
                className={`mb-0 space-y-6 ${hide}`}
                onSubmit={(e)=>onSignInSubmit(e)}
              >
                <div>
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      name="address"
                      type="number"
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      ref={usernameRef}
                      disabled={show}
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <label
                    htmlFor="terms-and-privacy"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    {" "}
                    By Clicking on this I agree to the
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Terms
                    </a>
                    and
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            
          </div>
        </div>
      </div>
      //   <ThemeProvider theme={theme}>
      //   <Container component="main" maxWidth="xs">
      //     <CssBaseline />
      //     <Box
      //       sx={{
      //         marginTop: 8,
      //         display: 'flex',
      //         flexDirection: 'column',
      //         alignItems: 'center',

      //       }}
      //     >
      //       <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      //         <LockOutlinedIcon />
      //       </Avatar>
      //       <Typography component="h1" variant="h5">
      //         Sign in
      //       </Typography>
      //       <Box component="form" onSubmit={onSignInSubmit} noValidate sx={{ mt: 1 }}>
      //         <TextField
      //           margin="normal"
      //           required
      //           fullWidth
      //           id="email"
      //           type="number"
      //           label="Phone Number"
      //           name="number"
      //           autoComplete="email"
      //           autoFocus
      //           value={name}
      //           onChange={(e)=>setName(e.target.value)}

      //         />
      //          <div id="recaptcha-container"></div>

      //         <FormControlLabel
      //           control={<Checkbox value="remember" color="primary" />}
      //           label="Remember me"
      //         />
      //         <Button
      //           type="submit"
      //           fullWidth
      //           variant="contained"
      //           sx={{ mt: 3, mb: 2 }}
      //         >
      //           Sign In
      //         </Button>
      //         <Grid container>

      //         </Grid>
      //       </Box>
      //     </Box>
      //     <Copyright sx={{ mt: 8, mb: 4 }} />
      //   </Container>
      // </ThemeProvider>
    );
  }
  function OtpPage() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className=" text-center text-3xl font-extrabold text-gray-900">
            Enter your Phone Number
          </h2>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            
              <div className="mx-20">
                
              </div>
           
              <form className="mb-0 space-y-6" onSubmit={(e)=>onSubmitOtp(e)}>
                <div>
                  <label
                    htmlFor="text"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Enter Otp
                  </label>
                  <div className="mt-1">
                    <input
                      name="address"
                      type="text"
                      required
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      ref={OtpRef}
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <label
                    htmlFor="terms-and-privacy"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    {" "}
                    By Clicking on this I agree to the
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Terms
                    </a>
                    and
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Confirm Otp
                  </button>
                </div>
              </form>
           
          </div>
        </div>
      </div>
      //<ThemeProvider theme={theme}>
      //     <Container component="main" maxWidth="xs">
      //       <CssBaseline />
      //       <Box
      //         sx={{
      //           marginTop: 8,
      //           display: 'flex',
      //           flexDirection: 'column',
      //           alignItems: 'center',
      //         }}
      //       >
      //         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      //           <LockOutlinedIcon />
      //         </Avatar>
      //         <Typography component="h1" variant="h5">
      //           Sign in
      //         </Typography>
      //         <Box component="form" onSubmit={onSubmitOtp} noValidate sx={{ mt: 1 }}>
      //           <TextField
      //             margin="normal"
      //             required
      //             fullWidth

      //             label="enter the six digit code sent to you"
      //            name="number"

      //             autoFocus
      //             value={num}
      //             onChange={(e)=>setNum(e.target.value)}

      //           />
      //            <div id="recaptcha-container"></div>

      //           <FormControlLabel
      //             control={<Checkbox value="remember" color="primary" />}
      //             label="Remember me"
      //           />
      //           <Button
      //             type="submit"
      //             fullWidth
      //             variant="contained"
      //             sx={{ mt: 3, mb: 2 }}
      //           >
      //             Confirm Otp
      //           </Button>
      //           <Grid container>

      //           </Grid>
      //         </Box>
      //       </Box>
      //       <Copyright sx={{ mt: 8, mb: 4 }} />
      //     </Container>
      //   </ThemeProvider>);
    );
  }

  return (
    
      <div>{currentState ? <OtpPage /> : <PPage />}</div>
  
  );
}
