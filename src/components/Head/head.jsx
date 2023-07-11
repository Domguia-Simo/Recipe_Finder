import React from 'react'
import '../../assets/css/HeadStyles/HeadStyles.css'
import '../../assets/fontawesome/css/all.css'

function Head(){
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
                        <SearchBar/>
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

function SearchBar(){
    return(
        <React.Fragment>
            <form methos="post" action="">
                <div className="search-bar" title="Search">
                    <input type="text" placeholder="Search the recipe of your favorite meals ..." />
                    <span className="fas fa-search" style={{display:"none"}}></span>
                </div>
            </form>
        </React.Fragment>
    );
}