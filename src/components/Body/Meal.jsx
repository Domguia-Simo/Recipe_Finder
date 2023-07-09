import React from 'react'

function Meal(){
    return(
        <React.Fragment>
            <div className="main-meal">
               <span><img src={require('../../assets/images/f10.jpg')} /></span> 
               <span><img src={require('../../assets/images/f12.jpg')} /></span> 
               <span><img src={require('../../assets/images/f4.jpg')} /></span> 
               <span><img src={require('../../assets/images/f7.jpg')} /></span> 
               <div style={{
                    fontSize:"large",
                    
                
               }}>
                   prev<span className="fas fa-chevron-left" style={{
                       border:"solid 1px grey",
                       borderRadius:"50%",
                       padding:"15px",
                       marginRight:"25px",
                       cursor:"pointer"

                   }}></span>
                   <span className="fas fa-chevron-right" style={{
                        border:"solid 1px grey",
                        borderRadius:"50%",
                        padding:"15px",
                        marginLeft:"25px",
                        cursor:"pointer"
                   }}></span>next
               </div>
               <div>
                <h3 style={{float:"right"}}>Total Result : 04 </h3>
               </div>
            </div>
            
        </React.Fragment>
    )
}

export default Meal