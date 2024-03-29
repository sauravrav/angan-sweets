/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useState } from "react";
import ButtonTags from "./ButtonTags";
import FoodCard from "./FoodCard";
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
import { combos } from "@/data/combo";

const foodTags = 
[
    {item:'SWEETS', stat: 'active'},
    {item:'NAMKEENS', stat: 'not-active'},
    {item:'SNACKS', stat: 'not-active'},
    {item:'CHATS', stat: 'not-active'},
    {item:'CAKES', stat: 'not-active'},
    {item:'BAKERY', stat: 'not-active'},
    {item:'FAST FOODS', stat: 'not-active'},
    {item:'NORTH INDIAN', stat: 'not-active'},
    {item:'SOUTH INDIAN', stat: 'not-active'},
    {item:'TAWA & TANDOOR', stat: 'not-active'},
    {item:'CHINESE & CONTINENTAL', stat: 'not-active'},
    {item:'SWEET BOX', stat: 'not-active'},
    {item:'COMBOS', stat: 'not-active'},
]

const foodData = [
    {...sweets},
    {...bakery},
    {...cakes},
    {...chats},
    {...chinese},
    {...fasts},
    {...namkeens},
    {...northIndian},
    {...southIndian},
    {...snacks},
    {...sweetbox},
    {...tawaTandoor},
    {...combos}
]

const FoodSection = () => {
    const [activeButton, setActiveButton] = useState('SWEETS');
    const filteredData = foodData.filter((x) => x.name === activeButton)[0].listOfItems
    return ( <div className="second-page">
        <div className="intro">
            <h1>Welcome to the official website of <span style={{color:'#fe0201'}}>Angan Sweets Nepal</span></h1>
            <div className="banner-section">
                <div className="grid-container">
                    <div className="grid-item">
                        <img src="/img/baluwatar.png" alt="" />
                    </div>
                    <div className="grid-item">
                        <img src="/img/battisputali.png" alt="" />
                    </div>
                    <div className="grid-item">
                        <img src="/img/tripureshwor.png" alt="" />
                    </div>
                    <div className="grid-item">
                        <img src="/img/lazimpat.png" alt="" />
                    </div>
                    <div className="grid-item center-item">
                        <img src="/img/sanepa.png" alt="" />
                    </div>
                </div>
            </div>
            <p>One stop location for all your cravings: Sweets, Namkeen, Snacks, Fast Food, Chaats and Bakery. Orders can be placed from the menu below.</p>
        </div>
        <div className="food-section">
            <h2>MENU</h2>
            <div className="food-tags">
                {
                    foodTags.map((x)=>(
                        <><ButtonTags key={x.item} title={x.item}  stat={x.item === activeButton ? 'active' : 'not-active'}
                        setActiveButton={setActiveButton}/></>
                    ))
                }
            </div>
            <div className="menu-items">
                {
                    filteredData.map((x)=>(
                        <>
                            <div className="food-card-wrapper">
                                <FoodCard 
                                    key={x.index}
                                    imgSrc={x.imgSrc}
                                    title={x.title}
                                    priceP={x.priceP}
                                    priceK={x.priceK} />
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    </div> );
}
 
export default FoodSection;

/* 
<div className="food-menu-section">
    <div className='container'>
        <h3>title</h3>
        <div className='category-list'>
            ... 
        </div>
        <div className='food-menu-list'>
            <div classname='row'>
                <div className='col col-12 col-sm-6 col-lg-4'>
                    <FoodCard />
                </div>
                <div className='col'>
                    <FoodCard />
                </div>
                <div className='col'>
                    <FoodCard />
                </div>
                <div className='col'>
                    <FoodCard />
                </div>
            </div>
        </div>
    </div>
</div>
*/