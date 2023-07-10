import React from 'react'
import '../../assets/css/BodyStyles/BodyStyles.css'

function Slider(){
    return(
        <React.Fragment>
             <center><h1>Most Popular Meals</h1></center><br/>
            <div className="slider">
            <span className="fas fa-chevron-left"></span>
            <div>
                <img src={require('../../assets/images/f13.jpg')}/><br/>
                Lorem ipsum dolor, sit amet <br/> adipisicing elit. Facere praesen
            </div>
            <div>
                <img src={require('../../assets/images/f14.jpg')}/><br/>
                Lorem ipsum dolor, sit amet <br/> adipisicing elit. Facere praesen
            </div>
             <div>
                <img src={require('../../assets/images/f15.jpg')}/><br/>
                Lorem ipsum dolor, sit amet <br/> adipisicing elit. Facere praesen
             </div>
            <div>
                <img src={require('../../assets/images/f11.jpg')}/><br/>
                Lorem ipsum dolor, sit amet <br/> adipisicing elit. Facere praesen
            </div>
                    
            <span className="fas fa-chevron-right"></span>        
            </div><br/><br/>
            <center className="radio"><h1
            style={{
                display:"flex",
                width:"15%",
                justifyContent:"space-between",
                margin:"auto"
            }}
            >
                <input type="radio"/>   
                <input type="radio"/> 
                <input type="radio"/> 
                <input type="radio"/> 
                <input type="radio"/> 
                <input type="radio"/>  
                <input type="radio"/>
                <input type="radio"/>
            </h1></center><br/>
        </React.Fragment>
    )
}

export default Slider