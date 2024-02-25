import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";

const Header = (props) => {
   return (
      <div className="sticky top-0 z-40 pr-4 font-sans w-screen shadow-[0_35px_60px_-15px_rgba(0,0,0,0.07)] bg-gray-50">
         <div className="container mx-auto max-w-7xl lg:p-0 sm:px-6">
            <div className="relative flex h-20 sm:grid sm:grid-cols-3 sm:h-24 w-full py-1 items-center ">
               <SearchBar></SearchBar>
               <div className="sm:flex justify-center hidden">
                  <img
                     src="./assets/images/logo.png"
                     alt="logo"
                     className="max-w-[120px] "
                  />
               </div>
               <SideBar></SideBar>
               {props.openCartModal ? props.children : ""}
            </div>
            <Navbar></Navbar>
         </div>
      </div>
   );
};

export default Header;
