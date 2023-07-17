import React from 'react'

function DisplayRecipe({meal ,status}){
    let instructions =[]
    let ingredients = []
    let measures = []
    let mealName = meal.strMeal
    let mealImage = meal.strMealThumb

    if(status != 404 && status != 400){

         // Recipe Instruction Informations
    let instruction = meal.strInstructions
    // instructions = instruction
    instruction = instruction.split('.')
    instructions = instruction.map(row =>{
        return(
            
            <ul>
                <li>{row}</li>
            </ul>
        )
 
    })
    instructions[instructions.length -1] = ""

    //Recipe Ingredient Information
    let ingredient = []
    if( meal.strIngredient1 != ''){
        ingredient.push(meal.strIngredient1 + '  -> ' + meal.strMeasure1)
    } if( meal.strIngredient2 != ''){
        ingredient.push(meal.strIngredient2  + '  -> ' + meal.strMeasure2)
    } if( meal.strIngredient3 != ''){
        ingredient.push(meal.strIngredient3  + '  -> ' + meal.strMeasure3)
    } if( meal.strIngredient4 != ''){
        ingredient.push(meal.strIngredient4  + '  -> ' + meal.strMeasure4)
    } if( meal.strIngredient5 != ''){
        ingredient.push(meal.strIngredient5  + '  -> ' + meal.strMeasure5)
    } if( meal.strIngredient6 != ''){
        ingredient.push(meal.strIngredient6  + '  -> ' + meal.strMeasure6)
    } if( meal.strIngredient7 != ''){
        ingredient.push(meal.strIngredient7  + '  -> ' + meal.strMeasure7)
    } if( meal.strIngredient8 != ''){
        ingredient.push(meal.strIngredient8  + '  -> ' + meal.strMeasure8)
    } if( meal.strIngredient9 != ''){
        ingredient.push(meal.strIngredient9  + '  -> ' + meal.strMeasure9)
    } if( meal.strIngredient10 != ''){
        ingredient.push(meal.strIngredient10  + '  -> ' + meal.strMeasure10)
    } if( meal.strIngredient11 != ''){
        ingredient.push(meal.strIngredient11  + '  -> ' + meal.strMeasure11)
    } if( meal.strIngredient12 != ''){
        ingredient.push(meal.strIngredient12  + '  -> ' + meal.strMeasure12)
    } if( meal.strIngredient13 != ''){
        ingredient.push(meal.strIngredient13  + '  -> ' + meal.strMeasure13)
    } if( meal.strIngredient14 != ''){
        ingredient.push(meal.strIngredient14  + '  -> ' + meal.strMeasure14)
    } if( meal.strIngredient15 != ''){
        ingredient.push(meal.strIngredient15  + '  -> ' + meal.strMeasure15)
    } if( meal.strIngredient16 != ''){
        ingredient.push(meal.strIngredient16  + '  -> ' + meal.strMeasure16)
    } if( meal.strIngredient17 != ''){
        ingredient.push(meal.strIngredient17  + '  -> ' + meal.strMeasure17)
    } if( meal.strIngredient18 != ''){
        ingredient.push(meal.strIngredient18  + '  -> ' + meal.strMeasure18)
    } if( meal.strIngredient19 != ''){
        ingredient.push(meal.strIngredient19  + '  -> ' + meal.strMeasure19)
    } if( meal.strIngredient20 != ''){
        ingredient.push(meal.strIngredient20  + '  -> ' + meal.strMeasure20)
    }

        ingredients = ingredient.map(row =>{
            return(
                <ul>
                    <li>{row}</li>
                </ul>
            )
        })

    }
   
        let error = 0;
        if(status == 404){
            error = <div style={{textAlign:"center" ,fontWeight:"lighter",color:"darkred"}}>
                Connection Problem !!!. <span className="fas fa-hand" style={{color:""}}></span><br/>
                 Please Verify your internet connection <br/>
            </div>
        }else if(status == 400){
            error = <div style={{textAlign:"center" ,fontWeight:"lighter",color:"darkred"}}>
            Meal Not Found !!!. <span className="fas fa-questionmark" style={{color:""}}></span><br/>
             Please Try another meal or correct your spelling <br/>
        </div>
        }
console.log(status)
    return(
        <React.Fragment>
            <div style={{letterSpacing:"2px",width:"95%",lineHeight:"25px",margin:"auto"}}>
                
                {error ?<h1>{error}</h1>:<>
                
                    <h2>{mealName}</h2>
                    <div ><br/>
                        <h2>Ingredients/Measurements</h2><br/>
                        {ingredients}
                    </div><br/>
    
                    <div  >
                        <h2>Instructions</h2><br/>
                        <div style={{textIndent:"20px"}}>
                        {instructions}
                        </div>
                    </div><br/>
                    <div>
                        <img src={mealImage} width="300px" height="250px"/>
                    </div>
                
                </>}
            </div>
        </React.Fragment>
    )
}

export default DisplayRecipe