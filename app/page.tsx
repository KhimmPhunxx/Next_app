
import BottomBar from "./components/bottombar/page";
import Navbar from "./components/navbar/page";
import TopBar from "./components/navbar/top-bar";
import Products from "./components/products/products";

export default function Home() {
  return (
   <div>
      <div>
        {/* <Navbar /> */}
      </div>
      <main className='h-[2000px]'>
        Home Page
      </main>
    <Products />
    <BottomBar /> 
     
   </div>
  );
}
