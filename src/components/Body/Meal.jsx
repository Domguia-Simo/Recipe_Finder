import React from 'react'

function Meal(){
    return(
        <React.Fragment>
            <div className="main-meal">
               <span className="meal"><img src={require('../../assets/images/f10.jpg')} /><br/><br/>
               Lorem ipsum dolor sit amet consectetur adipisicing .
                Quaerat sapiente molestias tempore inventore offici</span> 
               <span className="meal"><img src={require('../../assets/images/f12.jpg')} /><br/><br/>
               Lorem ipsum dolor sit amet consectetur adipisicing .
                Quaerat sapiente molestias tempore inventore offici</span> 
                <span className="meal"><img src={require('../../assets/images/f4.jpg')} /><br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing .
                Quaerat sapiente molestias tempore inventore offici</span> 
               <span className="meal"><img src={require('../../assets/images/f7.jpg')} /><br/><br/>
               Lorem ipsum dolor sit amet consectetur adipisicing .
                Quaerat sapiente molestias tempore inventore offici</span> 
               <div style={{
                    fontSize:"large",
                    
                
               }}>
                   <span className="fas fa-chevron-left" style={{
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
                   }}></span>
               </div>
               <div>
                <h3 style={{float:"right"}}>Total Result : 04 </h3>
               </div>
            </div>
            
        </React.Fragment>
    )
}

export default Meal