export default function SecondSection(){
    return (
        <section className="w-full bg-gray-100">
        <div className="flex  flex-col md:flex-row max-w-1200px m-cn py-4 px-6 gap-1">
          <div className="third">
            <div className="md:justify-start justify-center flex">
            <img src="./phone_iphone_FILL0_wght400_GRAD0_opsz48.png" className="mt-4 mb-10 "/>
            </div>
            <h2  className="text-center md:text-left  mb-2  text-lg  leading-7 uppercase  "> Manage on Mobile</h2>
            <p className="text-center md:text-left  mt-4 mb-10 leading-7 text-lg ">Create a full website, add products, manage
orders and inventory — right from your
smartphone</p>
         </div>
          <div className="third">
            <div className="md:justify-start justify-center flex">

            
           <img src="./language_FILL0_wght400_GRAD0_opsz48.png " className="mt-4 mb-10"/>
           </div>
           <h2  className="text-center md:text-left   mb-2  text-lg  leading-7 uppercase ">Free Domain</h2>
           <p className="text-center md:text-left  mt-4 mb-10 leading-7 text-lg ">
           Add brand value and authenticity to your
business with a unique, custom domain name
when you start with Myshago
           </p>
          </div>
          <div className="third">
            <div className="md:justify-start justify-center flex">
            <img src="payments_FILL0_wght400_GRAD0_opsz48.png" className="mt-4 mb-10" />
            </div>
           
            <h2  className="text-center md:text-left   mb-2  text-lg  leading-7 uppercase ">Free Transfer</h2>
           <p className="text-center md:text-left  mt-4 mb-10 leading-7 text-lg ">
           you can now recive payment with transfer
           </p>
          </div>
        </div>


      </section>
    );
}