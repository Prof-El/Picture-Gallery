import React from "react";
import './searchCard.css'




function SearchCard ({image}) {
    
    
    return (
        <div className="search-card"  >
            <img src={image.src.portrait} className="image"/>
            <p>{image.photographer}</p>
        </div>
    )
}


export default SearchCard