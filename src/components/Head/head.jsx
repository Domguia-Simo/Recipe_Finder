import React, { useEffect, useState } from 'react'
import '../../assets/css/HeadStyles/HeadStyles.css'
import '../../assets/fontawesome/css/all.css'

function Head({moveUpData}){

    function temp(data){
        if(data.length != 0){
            moveUpData(data)
        }else{
            moveUpData([])
        }
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

    let [submit ,setSubmit] = useState(0)

    const [meal ,setMeal] = useState('')
    const [result ,setResult] = useState([])

    const [loading ,setLoading] = useState(false)

   //function called when the input text is changed
    function handleChange(e){
        setMeal(e.target.value)
    }

    //Retreiving information from a Recipe API  
    useEffect(()=>{
        if(submit != 0){
            setLoading(true)
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
            .then(res => res.json())
            .then(data => {
                let ArrangedData =[]
                
                    if(data.meals[0] == undefined){
                        ArrangedData = []
                    }else{
                        let length
                             if(data.meals.length >= 10){
                               length=8
                            }
                            console.log(length)

                        for(let i=0;i<length;i++){
                            ArrangedData.push(data.meals[i])
              
                        }
                    }
                    console.log("The arranged Data is :")
                    console.log(ArrangedData)
                    setResult(ArrangedData)
                    setLoading(false)
                    if(ArrangedData == []){
                        moveResult([400])
                    }else{
                        moveResult(ArrangedData)
                    }
            })
            .catch(err =>{
                console.log("The error is : ")
                console.error(err.message)
                if(err.message == "Failed to fetch"){ moveResult([404])}
                else{moveResult([400])}
                // if(submit != 0)
               
                setLoading(false)
            } )

        }
        if(submit != 0)
        setSubmit(0)
    },[submit])

    //function called when the form is submitted
    function handleSubmit(e){
        e.preventDefault()
        e.target[0].blur()
            
        if(meal == ''){
            e.preventDefault()
            moveResult([])
        }else{
            setSubmit(submit+1)
            console.log(meal)      
          }
    }


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
            
            <div className="banner-text">
                        Discover the secrets of the<br/> most delicious meals <span className="fas fa-smile" style={{color:"yellow"}}></span>
            </div><br/>

             {loading ? <img style={{marginTop:"-20px"}}src={require('../../assets/images/R2.gif')} height="25px"/>:''}

<br/>
        </React.Fragment>
    );
}