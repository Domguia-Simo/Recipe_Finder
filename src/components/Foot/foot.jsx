import React from 'react'
import '../../assets/css/FootStyles/FootStyles.css'

function Foot(){
    return(
        <React.Fragment>
            
            <div className="foot">
                <div  className="upper-foot">

                    <div style={{display:"flex",flexDirection:"column"}}>
                        <h3>Contributors</h3>
                        <span>................</span>
                        <span>..................</span>
                        <span>.............</span>
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <h3>Partners</h3>
                        <span>................</span>
                        <span>..................</span>
                        <span>.............</span>
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <h3>Contacts    </h3>
                        <span>................</span>
                        <span>..................</span>
                        <span>.............</span>
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <h3>Referencess    </h3>
                        <span>................</span>
                        <span>..................</span>
                        <span>.............</span>
                    </div>

                </div>
                <br/><br/>
                <div>
                    Recipe Finder <span className="fas fa-spoon"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="fab fa-facebook"></span>&nbsp;&nbsp;
                    <span className="fab fa-twitter"></span>&nbsp;&nbsp;
                    <span className="fab fa-google"></span>&nbsp;&nbsp;
                    <span className="fab fa-instagram"></span>&nbsp;&nbsp;
                    <span className="fab fa-youtube"></span>&nbsp;&nbsp;
                    <br/>
                    &copy; Tous Droit Reserver
                </div>
            </div>
        </React.Fragment>
    )
} 

export default Foot