import { useState } from "react";
import ButtonTags from "./ButtonTags";
import FoodCard from "./FoodCard";

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
]

const foodData = [
    {
        name: 'SWEETS',
        listOfItems: [
            {imgSrc: '/img/onion-tomato.jpeg',
             title: 'Besan Plain Laddu',
             priceP: 'Nrs. 70/pc',
             priceK: 'Nrs. 1700/kg'
        },
        ]
    },
    {
        name: 'SNACKS',
        listOfItems: [
            {imgSrc: '/img/onion-tomato.jpeg',
             title: 'Kanpuri Laddu',
             priceP: 'Nrs. 64/pc',
             priceK: 'Nrs. 1900/kg'
        },
        ]
    },
]

const FoodSection = () => {
    const [activeButton, setActiveButton] = useState('SWEETS');
    const filteredData = foodData.filter((x) => x.name === activeButton)[0].listOfItems
    return ( <div className="second-page">
        <div className="intro">
            <h1>Welcome to the official website of Angan Sweets Nepal</h1>
            <p>One stop location for all your cravings: Sweets, Namkeen, Snacks, Fast Food, Chaats and Bakery. Orders can be placed from the menu below.</p>
        </div>
        <div className="food-section">
            <h2>EXPLORE OUR MENU</h2>
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