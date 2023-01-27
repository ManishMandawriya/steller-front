import React from 'react'

const Contact = () => {
    return (
        <>
            <section id="contact" className="position-relative section">
                <div className="container text-center">
                    <h6 className="subtitle">Contact</h6>
                    <h6 className="section-title mb-4">Get In Touch With Me</h6>
                    <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br/> rerum commodi corrupti, temporibus non quam.</p>

                    <div className="contact text-left">
                        <div className="form">
                            <h6 className="subtitle">Available 24/7</h6>
                            <h6 className="section-title mb-4">Get In Touch</h6>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                                </div>
                                <div className="form-group">
                                    <textarea name="contact-message" id="" cols={30} rows={5} className="form-control" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block rounded w-lg">Send Message</button>
                            </form>
                        </div>
                        <div className="contact-infos">
                            <div className="item">
                                <i className="ti-location-pin"></i>
                                <div className="">
                                    <h5>Location</h5>
                                    <p> 12345 Fake ST NoWhere AB Country</p>
                                </div>
                            </div>
                            <div className="item">
                                <i className="ti-mobile"></i>
                                <div>
                                    <h5>Phone Number</h5>
                                    <p>(123) 456-7890</p>
                                </div>
                            </div>
                            <div className="item">
                                <i className="ti-email"></i>
                                <div className="mb-0">
                                    <h5>Email Address</h5>
                                    <p>info@website.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="map">
                    <iframe src="https://snazzymaps.com/embed/61257"></iframe>
                </div>
            </section>

        </>
    )
}

export default Contact