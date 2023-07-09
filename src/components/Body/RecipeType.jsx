import React from 'react'

function ReciptType(){
    return(
        <React.Fragment>
            <div>
                <h1>Type</h1><br/>
                <nav style={{textIndent:"20px",display:"flex",flexDirection:"column",letterSpacing:"2px",fontSize:"x-large",lineHeight:"35px"}}>
                    <span>All</span>
                    <span>Fast Food</span>
                    <span>Bakeries</span>
                    <span>Meat</span>
                    <span>Fish</span>
                    <span>Juice</span>
                    <span>Discover</span>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default ReciptType