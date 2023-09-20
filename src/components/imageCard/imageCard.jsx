import React from "react";
import './imageCard.css'




function ImageCard ({image}) {
    
    
    return (
        <div className="image-card"  >
            <img src={image.src.portrait} className="image"/>
            <p>{image.photographer}</p>
        </div>
    )
}


export default ImageCard