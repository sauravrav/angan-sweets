/* eslint-disable @next/next/no-img-element */
import React from 'react'
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
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

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
                <img src='/img/logo.png' alt='logo' width={100} height={50}/>
            </div>
            <div className="search">
                <SearchComponent items={searchItems} />
            </div>
            <div className="contacts">
            <a href="https://www.facebook.com/AnganSweetsNepal?mibextid=ZbWKwL">
                <FaFacebook className="icon social-icon"/>
            </a>
            <a href="https://instagram.com/angansweets?igshid=MzRlODBiNWFlZA==">
                <FaInstagram className="instagram-icon social-icon"/>
            </a>
            <a href="https://www.tiktok.com/@angansweets?_t=8dUCfQzeemn&_r=1">
                <FaTiktok className="social-icon"/>
            </a>
            </div>
         </div>
         <div className='contacts'>Tripureshwor : 9802318809 / 01-5312502 Lazimpat : 9801847639 / 01-4511037 Battisputali : 9801975389 / 01-5912892 Baluwatar: 9801847636 / 01-4417237 Sanepa 9802346545 / 01-5916923</div>
        </>
     );
}
 
export default Navbar;