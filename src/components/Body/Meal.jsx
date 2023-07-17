import React,{useState} from 'react'

function Meal({recipe ,moveUpClick}){

    const [page ,setPage] = useState(1)
    let start = (page-1) * 4
    let end = start + 4
    let images =[]
    let reduceRecipe = []
    let totalResult = recipe.length

    for(let i=start;i<end;i++){
        reduceRecipe[i] = recipe[i]
    }

    function handleClick(meal){
        moveUpClick(meal)
   }

    if(recipe.length == 0){
        images = [
            <img src={require(`../../assets/images/f10.jpg`)} />,
            <img src={require(`../../assets/images/f12.jpg`)} />,
            <img src={require(`../../assets/images/f4.jpg`)} />,
            <img src={require(`../../assets/images/f7.jpg`)} />
       ]

       return(
        <React.Fragment>
            <div className="main-meal">
               <span className="meal" onClick={()=>handleClick(0)}>{images[0]} <br/><br/>
               Lorem ipsum dolor sit amet consectetur adipisicing .
                Quaerat sapiente molestias tempore inventore offici</span> 
                <span className="meal" onClick={()=>handleClick(1)}>{images[1]} <br/><br/>
               Lorem ipsum dolor sit amet consectetur adipisicing .
                Quaerat sapiente molestias tempore inventore offici</span> 
                <span className="meal" onClick={()=>handleClick(2)}>{images[2]} <br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing .
                Quaerat sapiente molestias tempore inventore offici</span> 
                <span className="meal" onClick={()=>handleClick(3)}>{images[3]}<br/><br/>
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

                   }}

                   ></span>
                   <span className="fas fa-chevron-right" style={{
                        border:"solid 1px grey",
                        borderRadius:"50%",
                        padding:"15px",
                        marginLeft:"25px",
                        cursor:"pointer"
                   }}

                   ></span>
               </div>
               <div>
                <h3 style={{float:"right"}}>Total Result : 04 </h3>
               </div>
            </div>
            
        </React.Fragment>
    )

    }
    else{

        images = reduceRecipe.map(row => {
            return(<>
                <span className="meal" onClick={()=>handleClick(row)}>
                <img src={row.strMealThumb}/><br/><br/>
                Name: &nbsp;&nbsp;&nbsp; <strong>{row.strMeal}</strong> .<br/>
                Country of Origin: &nbsp;&nbsp;&nbsp; <strong>{row.strArea}</strong><br/>
                {/* Category: &nbsp;&nbsp;&nbsp; <strong>{row.strCategory}</strong><br/><br/> */}
               </span> 
                </>
            )
           
        })
        return(
            <React.Fragment>
                <div className="main-meal">

                        {
                            images
                        }

                   <div style={{
                        fontSize:"large",
                        display:""
                    
                   }}>
                       <span className="fas fa-chevron-left" style={{
                           border:"solid 1px grey",
                           borderRadius:"50%",
                           padding:"15px",
                           marginRight:"25px",
                           cursor:"pointer"
    
                       }}
                        onClick={()=>{
                            if(page == 1){
                                setPage(1)
                            }else{
                                setPage(page-1)
                            }
                        }}
                       ></span>
                       <span className="fas fa-chevron-right" style={{
                            border:"solid 1px grey",
                            borderRadius:"50%",
                            padding:"15px",
                            marginLeft:"25px",
                            cursor:"pointer"
                       }}
                       onClick={()=>{
                        if(page == 2){
                            setPage(2)
                        }else{
                            setPage(page+1)
                        }
                    }}
                       ></span>
                   </div>
                   <div>
                    <h3 style={{float:"right",display:""}}>Total Result : {totalResult} </h3>
                   </div>
                </div>
                
            </React.Fragment>
        )

    }
 

   
}

export default Meal