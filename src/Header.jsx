import React from 'react'

const Header = () => {
  return (
    <>
        <header>
            <section className="container main-hero-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header-lef-side d-flex justify-content-center flex-column align-items-start" >
                        <h1 className="display-2">
                            Online Payment Made <br /> Easy For You.
                        </h1>
                        <p className="main-hero-para">
                            Lorem Ipsum has been the industry's standard dummy 
                            text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a 
                            type 
                        </p>
                        <h3>Get early acces for you</h3>
                        <div className="input-group mt-3">
                            <input type="text" 
                            className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text" placeholder="Enter Your Email" />
                            <div className="input-group-button">
                                Get it Now
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images"> 
                        <img src="./images/headerRight-1.jpg" alt="headerright" className="img-fluid" />
                        <img src="./images/he.jpg" alt="headerright2" className="img-fluid main-hero-img2" />
                    </div>

                </div>
            </section>
        </header>
    </>
  )
}

export default Header;