import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [open, setOpen] = useState();

    const routes = [
        { id: "1", name: "Home", path: "/" },
        { id: "2", name: "About", path: "/about" },
        { id: "3", name: "Contact", path: "/contact" },
        { id: "4", name: "Services", path: "/services" }
      ];
      

    return (
        <nav className="text-white bg-slate-700 p-6">
           <div className=" text-2xl   md:hidden " onClick={()=> setOpen(!open)}>
            {
                open === true ? 
                <RxCross2></RxCross2> : 
                <IoIosMenu className=""></IoIosMenu> 
            }
          
           </div>
            <ul className={`md:flex absolute lg:static duration-1000 
            ${open ? 'top-14' : '-top-60'}
            bg-slate-700 px-6 ml-5 `}>
            {
                routes.map(route => <Link key={route.id}
                route={route}
                ></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;