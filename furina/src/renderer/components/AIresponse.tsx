import React from "react";
import { useState } from "react";
import './AIresponse.css';
interface AIResponseProps{
    content:string
}
const AIresponse:React.FC<AIResponseProps> = ({content})=>{
    return(
        <div className="airesponse-container">
                <div dangerouslySetInnerHTML={{ __html: content }}/>
        </div>
        
    )
}

export default AIresponse