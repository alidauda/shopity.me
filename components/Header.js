import Link from "next/link";
import Image from "next/image";
import logo from "../public/shopity.png";
export default function Header(){
    return(
<header className="max-w-1200px m-cn sticky top-0 z-50 bg-white">
        <nav className="">
          <ul className="flex flex-row gap-50px items-center">
            <li>
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
            </li>
            <li>
              <Link className="" href="#/">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="" href="#">
                Terms and Conditions
              </Link>
            </li>
          </ul>

          <ul className="flex flex-row gap-3 items-center ">
            <li className="border-2 rounded-lg py-2 px-3 block hover:border-hover hover:text-hover">
              <Link href="#">Sign in</Link>
            </li>
            <li className="whitespace-nowrap py-4 px-6 border-2 rounded-lg bg-normal block hover:bg-hover ">
              <Link href="#">Create free account</Link>
            </li>
          </ul>
        </nav>
      </header>
    );

}

