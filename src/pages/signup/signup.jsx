import React, { useState } from 'react'
import './signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isloading, setIsloading] = useState(false)
    const [number, setNumber] = useState("")
    const navigate = useNavigate()
    const login = async () => {
        setIsloading(true)
        try {
            const response = await axios.post(`${process.env.REACT_APP_HOST}/auth/register`, {
                email,
                password,
                number
            })
            console.log({ response });
            if (response.status === 201) {
                
                navigate("/");
            }

        } catch (error) {
            console.log({ error });
            alert(error?.response?.data?.msg);
        }
        setIsloading(false)
    };
    return (
        <div>
            <div className="container">
                <div className="gambar">
                    <img className="signin-images" src="/images/signin_image.png" alt="signin-images" />
                </div>
                <div className="form">
                    <div className="top">
                        <div className="logo">
                            <img src="/images/logo.png" alt="logo" />
                            <span>coffe shop</span>
                        </div>
                        <button className="button-signup">sign up</button>
                    </div>
                    <h2 className='font-bold'>sign up</h2>
                    <form action>
                        <div className="form-input">
                            <label htmlFor>email address</label>
                            <input className='signup' onChange={e => {
                                setEmail(e.target.value)
                            }} type="text" placeholder="enter your email address..." />
                        </div>
                        <div className="form-input">
                            <label htmlFor>password</label>
                            <input className='signup' onChange={e => {
                                setPassword(e.target.value)
                            }} type="password" placeholder="enter your password..." />
                        </div>
                        <div className="form-input">
                            <label htmlFor>Phone Number :</label>
                            <input className='signup' onChange={e => {
                                setNumber(e.target.value)
                            }} type="password" placeholder="Enter your phone number..." />
                        </div>
                        <div onClick={login} className="btn-login cursor-pointer">{isloading ? "loading..." : "login"}</div>
                        <div className="btn-google">
                            <img src="/images/google-logo.png" alt="logo" />
                            Login with google
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="member">
                    <div className="get text-left flex flex-col justify-center gap-4">
                        <h1 className="judul text-3xl text-left font-bold ">Get your member card now!</h1>
                        <p>Let's join with our member and enjoy the deals.</p>
                    </div>
                    <div className="creatnow">
                        <button className="btn-creatnow">create now</button>
                    </div>
                </div>
                <div className="judul1">
                    <div className="form-">
                        <div className="top-star">
                            <div className="logo-futher flex-col flex gab-2">
                                <div className="logo-cofee">
                                    <img src="/images/logo.png" alt="logo" />
                                    <span>coffe shop</span>
                                </div>
                                <p className="judul2 text-left">Coffee Shop is a store that sells some good <br />
                                    meals, and especially coffee. We provide <br />
                                    high
                                    quality
                                    beans</p>
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

export default Signup
