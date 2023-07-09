import React from 'react'
import '../../assets/css/FootStyles/FootStyles.css'

function Foot(){
    return(
        <React.Fragment>
            <div className="foot">
                Recipe Finder <span className="fas fa-spoon"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="fab fa-facebook"></span>&nbsp;&nbsp;
                <span className="fab fa-twitter"></span>&nbsp;&nbsp;
                <span className="fab fa-google"></span>&nbsp;&nbsp;
                <span className="fab fa-instagram"></span>&nbsp;&nbsp;
                <span className="fab fa-youtube"></span>&nbsp;&nbsp;
                <br/>
                &copy; Tous Droit Reserve
            </div>
        </React.Fragment>
    )
} 

export default Foot