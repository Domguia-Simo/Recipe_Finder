import React from 'react'

function Meal({recipe ,moveUpClick}){

    let images =[]

    function handleClick(id){
        moveUpClick(recipe[id])
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
    else{
        let url;
        for(let i=0;i<recipe.length;i++){
            url[i] = recipe[i].strMealThumb
        }

        console.log(url[0])
        // for(let i=0;i<recipe.length;i++){
        //     images.push(<img src={url[i]}/>)
        // }

        console.log(images)

        return(
            <React.Fragment>
                <div className="main-meal">

                        {()=>{

                        }}

                   <div style={{
                        fontSize:"large",
                        display:"none"
                    
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
                    <h3 style={{float:"right",display:"none"}}>Total Result : 04 </h3>
                   </div>
                </div>
                
            </React.Fragment>
        )

    }
 

   
}

export default Meal