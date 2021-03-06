import React from 'react'

const Contact = () => {
  return (
    <>
        <section className="contactus-section">
            <div className="container">
                <div className="row">
                    <div className="contact-leftside col-12 col-lg-5">
                        <h1 className="main-heading">
                            Connect With Our <br /> Sales Team.
                        </h1>
                        <p className="main-hero-para">
                        Lorem ipsum, dolor sit amet consectetur elit. Etquia quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Etquia quis?
                        </p>
                        <figure>
                            <img src="../images/he.jpg" alt="contactUsImg" className="img-fluid" />
                        </figure>

                    </div>
                    {/* right side contact form */}
                    <div className="contact-rightside col-12 col-lg-7">
                        <form method="POST">
                            <div className="row">
                                <div className="col-12 col-lg-6 contact-input-feild">
                                    <input type="text" name="" id=" " className="form-control" placeholder="First Name" />

                                </div>
                                <div className="col-12 col-lg-6 contact-input-feild">
                                    <input type="text" name="" id=" " className="form-control" placeholder="Last Name" />

                                </div>

                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-6 contact-input-feild">
                                    <input type="text" name="" id=" " className="form-control" placeholder="Phone Number" />

                                </div>
                                <div className="col-12 col-lg-6 contact-input-feild">
                                    <input type="text" name="" id=" " className="form-control" placeholder="Email ID" />

                                </div>

                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-12 contact-input-feild">
                                    <input type="text" name="" id="" className="form-control" placeholder="Add Address"  />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-12">
                                    <input type="text" name="" id="" className="form-control" placeholder="Enter Your Message"  />
                                </div>

                            </div>
                            <div class="form-check form-checkbox-style">
                                <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                                <label class="form-check-label" className="main-hero-para" for="flexCheckChecked">
                                    I agree that the easyPayment may contact me at 
                                    the email address or phone number above 
                                </label>
                            </div>
                            <button type="submit" className="btn btn-style w-100">
                                Submit
                            </button>

                        </form>

                    </div>

                </div>
        

            </div>

        </section>
    </>
  )
}

export default Contact;

