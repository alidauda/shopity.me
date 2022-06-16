import Link from "next/link"
export default function HomePage() {
  return (
    <>
      <div className="flex flex-col     ">
        <div className="flex-row justify-between items-center px-200px py-20px w-full shadow-md fixed z-2 bg-white ">
          <div className="inline-flex space-x-2 ">
            <img className="h-12 w-12 rounded-full " src="/shopity.png" />
            <p className="font-bold  text-left text-3xl">Myshago</p>
          </div>
         
          <div className="w-32 inline-flex float-right">
            <Link href="https://play.google.com/store/apps/details?id=com.shopity.shopity" target="_blank"><a><img src="/353328.svg" /></a></Link>
          </div>
        </div>
      </div>
    </>
  );
}
