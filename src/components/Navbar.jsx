import React from 'react'
import Image from "next/image";
import SearchComponent from "./searchComponent";
import { sweets } from "@/data/sweets";
import { bakery } from "@/data/bakery";
import { cakes } from "@/data/cakes";
import { chats } from "@/data/chats";
import { chinese } from "@/data/chinese";
import { fasts } from "@/data/fast";
import { namkeens } from "@/data/namkeen";
import { northIndian } from "@/data/north";
import { southIndian } from "@/data/south";
import { snacks } from "@/data/snacks";
import { sweetbox } from "@/data/sweetbox";
import { tawaTandoor } from "@/data/tawa";

const searchItems = [
    ...sweets.listOfItems,
    ...bakery.listOfItems,
    ...namkeens.listOfItems,
    ...cakes.listOfItems,
    ...chats.listOfItems,
    ...chinese.listOfItems,
    ...fasts.listOfItems,
    ...namkeens.listOfItems,
    ...northIndian.listOfItems,
    ...southIndian.listOfItems,
    ...snacks.listOfItems,
    ...sweetbox.listOfItems,
    ...tawaTandoor.listOfItems
]

const Navbar = () => {
    return ( 
        <>
         <div className="navbar">
            <div className="logo">
                <Image src='/img/logo.png' alt='logo' width={100} height={50}/>
            </div>
            <div className="search">
                <SearchComponent items={searchItems} />
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