import Link from "next/link";
import Image from "next/image";
import google from "public/353328.svg";
import section from "public/section.jpeg";
export default function FirstSection(){
    return(
<section className="w-full  ">
        <div className="flex flex-col  md:flex-row m-cn max-w-1200px py-4 px-6 gap-1">
          <div className="test  ">
            <div className="px-4 justify-items-center">
              <h1 className="text-5xl   text-center md:text-left">
                E-commerce platform for growing businesses
              </h1>
              <p className=" mt-4 mb-10 leading-7 text-center md:text-left">
              Launch, scale and manage your business with Dukaan’s all-in-one commerce platform
              </p>
               <div className="  flex md:justify-start justify-center">
              <Link href="#"  ><a><div className="   test1 text-center block whitespace-nowrap py-4 px-6 border-2 rounded-lg bg-normal  hover:bg-hover">Create free account</div></a></Link>
              </div>
              <div className="  flex md:justify-start justify-center">
               <Link  href="#"><a className="ml-0 mt-0"><Image src={google} alt="google play store link" width={300}
               height={150} /></a></Link>
             </div>
            </div>
          </div>
          <div className="test ">
            <div className="px-4 ">
<Image src={section} height={650} alt="section image"/>
            </div>
          </div>
        </div>
      </section>
    );
}