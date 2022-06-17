import Header from "components/Header.js";
import FirstSection from "components/FirstSection.js";
import SecondSection from "components/SecondSection.js";
import ThirdSection from "components/ThirdSection.js";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/shopity.png";
export default function Home() {
  return (
    <div>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <footer className="w-full bg-gray-200">
        <div className="flex  flex-col md:flex-row max-w-1200px m-cn py-4 px-6 gap-1">
          <div className="test md:order-1 order-2 md:justify-start justify-center flex">
          <Link className="" href="#">
                <a>
                  <Image
                    src={logo}
                    alt="Picture of the author"
                    width={70}
                    height={70}
                    className="rounded-full"
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </a>
              </Link>
          </div>
          <div className="test  ">
            <Link href="#"><a><p className="text-center md:text-left  mt-4 mb-2 leading-7 text-lg">Privacy Policy</p></a></Link>
            <Link href="#"><a><p className="text-center md:text-left  mt-4 mb-2 leading-7 text-lg">Terms and Conditions</p></a></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
