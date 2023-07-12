import React from 'react'

function DisplayRecipe({meal}){
    // Recipe Instruction Informations
    let instructions =[]
    let instruction = meal.strInstructions
    instructions = instruction.split('\r\n')
    instructions.map(row =>{
        <ul>
            <li>{row}</li>
        </ul>
    })

    //Recipe Ingredient Information
    let ingredients = []
    let ingredient = []
    if(meal.strIngredient1 != null || meal.strIngredient1 != ''){
        ingredient.push(meal.strIngredient1)
    }else if(meal.strIngredient2 != null || meal.strIngredient2 != ''){
        ingredient.push(meal.strIngredient2)
    }else if(meal.strIngredient3 != null || meal.strIngredient3 != ''){
        ingredient.push(meal.strIngredient3)
    }else if(meal.strIngredient4 != null || meal.strIngredient4 != ''){
        ingredient.push(meal.strIngredient4)
    }else if(meal.strIngredient5 != null || meal.strIngredient5 != ''){
        ingredient.push(meal.strIngredient5)
    }else if(meal.strIngredient6 != null || meal.strIngredient6 != ''){
        ingredient.push(meal.strIngredient6)
    }else if(meal.strIngredient7 != null || meal.strIngredient7 != ''){
        ingredient.push(meal.strIngredient7)
    }else if(meal.strIngredient8 != null || meal.strIngredient8 != ''){
        ingredient.push(meal.strIngredient8)
    }else if(meal.strIngredient9 != null || meal.strIngredient9 != ''){
        ingredient.push(meal.strIngredient9)
    }else if(meal.strIngredient10 != null || meal.strIngredient10 != ''){
        ingredient.push(meal.strIngredient10)
    }else if(meal.strIngredient11 != null || meal.strIngredient11 != ''){
        ingredient.push(meal.strIngredient11)
    }else if(meal.strIngredient12 != null || meal.strIngredient12 != ''){
        ingredient.push(meal.strIngredient12)
    }else if(meal.strIngredient13 != null || meal.strIngredient13 != ''){
        ingredient.push(meal.strIngredient13)
    }else if(meal.strIngredient14 != null || meal.strIngredient14 != ''){
        ingredient.push(meal.strIngredient14)
    }else if(meal.strIngredient15 != null || meal.strIngredient15 != ''){
        ingredient.push(meal.strIngredient15)
    }else if(meal.strIngredient16 != null || meal.strIngredient16 != ''){
        ingredient.push(meal.strIngredient16)
    }else if(meal.strIngredient17 != null || meal.strIngredient17 != ''){
        ingredient.push(meal.strIngredient17)
    }else if(meal.strIngredient18 != null || meal.strIngredient18 != ''){
        ingredient.push(meal.strIngredient18)
    }else if(meal.strIngredient19 != null || meal.strIngredient19 != ''){
        ingredient.push(meal.strIngredient19)
    }else if(meal.strIngredient20 != null || meal.strIngredient20 != ''){
        ingredient.push(meal.strIngredient20)
    }

        ingredients = ingredient.map(row =>{
            <ul>
                <li>{row}</li>
            </ul>
        })
    

    //Recipe Measurements Information
    let measures = []
    let measure = []
    if(meal.strMeasure1 != null || meal.strMeasure1 != ''){
        measure.push(meal.strMeasure1)
    }else if(meal.strMeasure2 != null || meal.strMeasure2 != ''){
        measure.push(meal.strMeasure2)
    }else if(meal.strMeasure3 != null || meal.strMeasure3 != ''){
        measure.push(meal.strMeasure3)
    }else if(meal.strMeasure4 != null || meal.strMeasure4 != ''){
        measure.push(meal.strMeasure4)
    }else if(meal.strMeasure5 != null || meal.strMeasure5 != ''){
        measure.push(meal.strMeasure5)
    }else if(meal.strMeasure6 != null || meal.strMeasure6 != ''){
        measure.push(meal.strMeasure6)
    }else if(meal.strMeasure7 != null || meal.strMeasure7 != ''){
        measure.push(meal.strMeasure7)
    }else if(meal.strMeasure8 != null || meal.strMeasure8 != ''){
        measure.push(meal.strMeasure8)
    }else if(meal.strMeasure9 != null || meal.strMeasure9 != ''){
        measure.push(meal.strMeasure9)
    }else if(meal.strMeasure10 != null || meal.strMeasure10 != ''){
        measure.push(meal.strMeasure10)
    }else if(meal.strMeasure11 != null || meal.strMeasure11 != ''){
        measure.push(meal.strMeasure11)
    }else if(meal.strMeasure12 != null || meal.strMeasure12 != ''){
        measure.push(meal.strMeasure12)
    }else if(meal.strMeasure13 != null || meal.strMeasure13 != ''){
        measure.push(meal.strMeasure13)
    }else if(meal.strMeasure14 != null || meal.strMeasure14 != ''){
        measure.push(meal.strMeasure14)
    }else if(meal.strMeasure15 != null || meal.strMeasure15 != ''){
        measure.push(meal.strMeasure15)
    }else if(meal.strMeasure16 != null || meal.strMeasure16 != ''){
        measure.push(meal.strMeasure16)
    }else if(meal.strMeasure17 != null || meal.strMeasure17 != ''){
        measure.push(meal.strMeasure17)
    }else if(meal.strMeasure18 != null || meal.strMeasure18 != ''){
        measure.push(meal.strMeasure18)
    }else if(meal.strMeasure19 != null || meal.strMeasure19 != ''){
        measure.push(meal.strMeasure19)
    }else if(meal.strMeasure20 != null || meal.strMeasure20 != ''){
        measure.push(meal.strMeasure20)
    }

        measures = measure.map(row =>{
            <ul>
                <li>{row}</li>
            </ul>
        })

    return(
        <React.Fragment>
            <div>
                <h2>{meal.strMeal}</h2>
                <div>
                    {ingredients}
                </div>
                <div>
                    {measures}
                </div>
                <div>
                    <img src={require(`${meal.strMealThumb}`)}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DisplayRecipe