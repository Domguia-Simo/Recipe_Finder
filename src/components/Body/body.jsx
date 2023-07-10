import React from 'react'
import RecipeType from './RecipeType.jsx'
import Meal from './Meal.jsx'
import Slider from './Slider.jsx'
import '../../assets/css/BodyStyles/BodyStyles.css'

function Body(){
    return(
        <React.Fragment>
            <br/><br/>
            <div className="main">

                <div className="main-upper">
                
                    <RecipeType/>
                    <Meal/>
                </div>

                <br/><br/>

                <div className="main-lower">
                    <Slider/>
                </div>

                <br/><br/>

            </div>
        </React.Fragment>
    );
}

export default Body;