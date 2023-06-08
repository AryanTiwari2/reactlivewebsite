import React,{useState} from "react";
import MenuCard from "./MenuCard";
import Menu from "./API.js"
import "./Restaurent.css"
const Restaurent =()=>
{
    const [dataset,setMenu] = useState(Menu)
    const filterItem=(category)=>
    {
        if(category==='All')
        {
            setMenu(Menu);
        }
        else
        {
            const updateList = Menu.filter((curElem)=>
            {
                return curElem.category===category;
            });
            setMenu(updateList);
        }
    }
    return(
        <>
        <div className="Cont">
            <button className="button" onClick={()=>filterItem("BreakFast")}>Breakfast</button>
            <button className="button" onClick={()=>filterItem("Lunch")}>Lunch</button>
            <button className="button"onClick={()=>filterItem("Dinner")}>Dinner</button>
            <button className="button"onClick={()=>filterItem("All")}>All</button>
        </div>
        <MenuCard dataset={dataset}/>
        </>
    );
};
export default Restaurent;