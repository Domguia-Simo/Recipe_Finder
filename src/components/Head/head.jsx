import React, { useEffect, useState } from 'react'
import '../../assets/css/HeadStyles/HeadStyles.css'
import '../../assets/fontawesome/css/all.css'

function Head({moveUpData}){

    function temp(data){
        moveUpData(data)
    }

    return(
        <React.Fragment>
            <div id="head">
                <div className="head-information">
                    <div className="head-aside">
                        <span className="fab fa-facebook"></span>&nbsp;&nbsp;&nbsp;
                        <span className="fab fa-twitter"></span>&nbsp;&nbsp;&nbsp;
                        <span className="fab fa-google"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button>
                            Login
                        </button>
                    </div>
                    <h1 style={{margin:"0px 0px 20px"}}>Recipe Finder <span className="fas fa-spoon"></span></h1>

                    <div className="links">
                        <a className="link" href="/">Blog</a>
                        <a className="link" href="/">About Us</a>
                        <a className="link"href="/">Contributions</a>
                    </div>
                        
                    <div>
                        <SearchBar moveResult={temp}/>
                    </div>

                    <div className="banner-text">
                        Discover the secrets of the<br/> most delicious meals <span className="fas fa-smile" style={{color:"yellow"}}></span>
                    </div>

                </div>
                {/* //Floating menu for mobile view */}
                        <div className="floating-menu">
                            <span className="fas fa-hamburger"></span>
                        </div>
                <div className="banner">
                    <img src={require('../../assets/images/banner2.jpg')} className="banner-img" alt="Banner of the recipe finder website" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Head;

function SearchBar({moveResult}){

    const [submit ,setSubmit] = useState(0)

    const [meal ,setMeal] = useState('')
    const [result ,setResult] = useState()

   //function called when the input text is changed
    function handleChange(e){
        let temp;
        temp = e.target.value
        setMeal(temp)
    }
    //function called when the form is submitted
    function handleSubmit(e){
        e.preventDefault()
        if(meal.length > 2){
            setSubmit(!submit)
            // console.log(result)
            moveResult(result)
        }else if(meal == ''){
            moveResult([])
        }
    }

    //Retreiving information from a Recipe API
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(res => res.json())
        .then(data => {
            let ArrangedData =[]
            
                for(let i=0;i<data.meals.length;i++){
                    ArrangedData.push(data.meals[i])
                    if(data.meals.length >= 4){
                       break;
                    }
                }
                // console.log("The arranged Data is :")
                // console.log(ArrangedData)
            setResult(ArrangedData)
        })
        .catch(err =>{
            console.log("The error is : ")
            console.error(err)
            moveResult([])
        } )
    },[submit])

    return(
        <React.Fragment>
            <form methos="GET" action="" onSubmit={(e)=>handleSubmit(e)}>
                <div className="search-bar" title="Search">
                    <input 
                        type="text" 
                        placeholder="Search the recipe of your favorite meals ..."
                        name="meal"
                        onChange={(e)=>handleChange(e)}
                        value={meal}
                    />
                    <span className="fas fa-search" style={{display:"none"}}></span>
                </div>
            </form>
        </React.Fragment>
    );
}