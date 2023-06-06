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

const FoodSection = () => {
    const [activeButton, setActiveButton] = useState('SWEETS');
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
                <div className="food-card-wrapper">
                    <FoodCard />
                </div>
                <div className="food-card-wrapper">
                    <FoodCard />
                </div>
                <div className="food-card-wrapper">
                    <FoodCard />
                </div>
                <div className="food-card-wrapper">
                    <FoodCard />
                </div>
                <div className="food-card-wrapper">
                    <FoodCard />
                </div>
                <div className="food-card-wrapper">
                    <FoodCard />
                </div>
            </div>
        </div>
    </div> );
}
 
export default FoodSection;