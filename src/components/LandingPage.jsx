import React,{useState} from 'react'
import Head from './Head/head'
import Body from './Body/body'
import Foot from './Foot/foot'

function LandingPage(){
    const [recipe ,setRecipe] = useState([])

    function RecipeFromHead(data){
        console.log('At the landing page')
console.log(data)
        setRecipe(data)
    }

    return(
        <React.Fragment>
            <Head moveUpData={RecipeFromHead}/><br/>
            <Body recipe={recipe}/><br/>
            <Foot/>
        </React.Fragment>
    )
}

export default LandingPage