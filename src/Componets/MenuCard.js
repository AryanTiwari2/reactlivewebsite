import React from "react";
import "./MenuCard.css"
const MenuCard =(props)=>
{
    return (
        <>
            {props.dataset.map((currElem)=>
            {
               return (
                <>
                <div className="container">
            <span className="container-id">{currElem.id}</span>
            <div className="container-category">{currElem.category}</div>
            <h1 className="container-value">{currElem.value}</h1>
            <p className="Description">{currElem.dest}</p>
            <hr/>
            <img className="image "height="280" width="690" src={currElem.link}/>
            </div>
                </>
               );
            }
            )}
            </>
    );
}
export default MenuCard;