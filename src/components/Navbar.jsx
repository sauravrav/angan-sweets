import SelectSearch from "react-select-search";
import { searchData } from "../../data";
import 'react-select-search/style.css'
import Image from "next/image";
import SearchComponent from "./searchComponent";
import { sweets } from "@/data/sweets";

const Navbar = () => {
    return ( 
        <>
         <div className="navbar">
            <div className="logo">
                <Image src='/img/logo.png' alt='logo' width={100} height={50}/>
            </div>
            <div className="search">
            <SearchComponent items={sweets.listOfItems} />
            </div>
            <div className="contacts">
                Tripureshwor : 9802318809 / 01-4212502 <br />
                Lazimpat : 9801847639 / 01-4511037     <br />
                Battisputali : 9801975389 / 01-5912892 <br />
                Baluwatar: 9801847636 / 01-4417237      <br />
                Sanepa 9802346545 / 01-5916923         <br />
            </div>
         </div>
        </>
     );
}
 
export default Navbar;