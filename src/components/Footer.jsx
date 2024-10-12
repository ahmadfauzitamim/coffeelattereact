import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="judul1">
                    <div className="form-">
                        <div className="top-star">
                            <div className="logo-futher flex-col flex gap-2">
                                <div className="logo-cofee">
                                    <img src="/images/logo.png" alt="logo" />
                                    <span>coffe shop</span>
                                </div>
                                <div className='o'>
                                    <p className="judul2 text-left">Coffee Shop is a store that sells some good <br />
                                        meals, and especially coffee. We provide <br /> high quality beans</p>
                                </div>
                                <div className='q'>
                                    <img src="/images/Facebook.png" alt="Facebook" />
                                    <img src="/images/Twitter.png" alt="Twitter" />
                                    <img src="/images/Instagram copy.png" alt="Instagram" />
                                </div>
                            </div>
                            <div className="judul3">
                                <h4 className='font-bold'>product</h4>
                                <a href="#download">download</a>
                                <a href="#pricing">pricing</a>
                                <a href="#Locations">Locations</a>
                                <a href="#Countries">Countries</a>
                                <a href="#Blog">Blog</a>
                            </div>
                            <div className="judul3">
                                <h4 className='font-bold'>Engage</h4>
                                <a href="Coffe Shop ?">Coffe Shop ?</a>
                                <a href="FAQ">FAQ</a>
                                <a href="About Us ">About Us</a>
                                <a href="Privacy Policy">Privacy Policy</a>
                                <a href="Terms of Service">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
