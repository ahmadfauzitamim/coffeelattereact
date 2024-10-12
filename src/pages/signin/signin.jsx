import React, { useEffect, useState } from 'react'
import './signin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Signin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isloading, setIsloading] = useState(false)

  const navigate = useNavigate()
  const login = async () => {
    setIsloading(true)
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password
      })
      console.log({ response });
      if (response.status === 200) {
        localStorage.setItem("token", response.data?.token)
      }
      if (response.status === 200) {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
        navigate("/")
      }

    } catch (error) {
      console.log({ error })
      Swal.fire(error?.response?.data?.msg)
    }
    setIsloading(false)
  }
  const [isLogin, setIsLogin] = useState(false)
  // ini akan di eksekusi ketika pertama kali di load
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setIsLogin(true)
    }
  }, [])

  useEffect(() => {
    isLogin && navigate("/")
  }, [isLogin])
  return (
    <div>
      <div className="container">
        <div className="gambar">
          <img className="signin-image" src="/images/signin_image.png" alt="signin-image" />
        </div>
        <div className="form">
          <div className="top">
            <div className="logo">
              <img src="/images/logo.png" alt="logo" />
              <span>coffe shop</span>
            </div>
            <button className="button-signup">sign up</button>
          </div>
          <h2 className='font-bold'>Login</h2>
          <form action>
            <div className="form-input">
              <label htmlFor>email address</label>
              <input className='input-signin' onChange={e => {
                setEmail(e.target.value)
              }} type="text" placeholder="enter your email address..." />
            </div>
            <div className="form-input">
              <label htmlFor>password</label>
              <input className='input-signin' onChange={e => {
                setPassword(e.target.value)
              }} type="password" placeholder="enter your password..." />
            </div>
            <div className="forgot">forgot password</div>
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
            <h1 className="judul text-3xl text-left font-bold">Get your member card now!</h1>
            <p>Let's join with our member and enjoy the deals.</p>
          </div>
          <div className="creatnow">
            <button className="btn-creatnow">create now</button>
          </div>
        </div>
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

export default Signin
