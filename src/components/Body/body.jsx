import React,{useState} from 'react'
import RecipeType from './RecipeType.jsx'
import Meal from './Meal.jsx'
import Slider from './Slider.jsx'
import DisplayRecipe from './DisplayRecipe.jsx'
import '../../assets/css/BodyStyles/BodyStyles.css'

function Body({recipe}){ 
    const [selected ,setSelectedMeal] = useState(0)

    function selectedMeal(meal){
        setSelectedMeal(meal)
    }

    if((selected == 0 && recipe[0] != 404 && recipe[0] != 400 ) || (selected == 1 && recipe != [])){
        return(
            <React.Fragment>
                <br/><br/>
                <div className="main">
    
                    <div className="main-upper">
                        <RecipeType/>
                        <Meal recipe={recipe} moveUpClick={selectedMeal}/>
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
    else{

        return(
            <React.Fragment>
                <br/><br/>
                <div className="main">
    
                    <div className="main-upper">
                      <DisplayRecipe meal={selected} status ={recipe[0]}/>
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
}

export default Body;