import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Route, useNavigate } from 'react-router-dom'
import Navitem from './Navitem'



function Navbar() {
    const navigation = useNavigate()
    const [isLogin, setIsLogin] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    // ini akan di eksekusi ketika pertama kali di load
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setIsLogin(true)
        }
    }, [])
    const [profile, setProfile] = useState({})
    const token = localStorage.getItem('token')
    const getProfile = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/user/profile`, {
                headers: {
                    Authorization: `bearer ${token}`
                }

            })
            console.log({ response });
            setProfile(response?.data)

        } catch (error) {
            console.log({ error });

        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    const dataNav = [
        {
            name: "Home",
            Route: "/"
        },
        {
            name: "Product",
            Route: "/product"
        },
        {
            name: "You Cart",
            Route: "/cart"
        },
        {
            name: "History",
            Route: "/history"
        }
    ]

    return (
        
        <div className='flex items-center justify-between mx-auto px-4 sm:px-16 py-6 border-b-2'>
            <div className='flex items-center justify-center gap-2 order-1 sm:order-2 lg:order-1'>
                <img src="/images/logo-coffe.svg" alt="Logo Coffee" />
                <div className="logo font-bold text-lg">Coffeeshop</div>
            </div>
            <div className="lg:flex items-center justify-center gap-x-10 list-none hidden lg:order-2">
                {
                    dataNav.map((item, index,) => {
                        return (
                            <Navitem key={index} to={item.Route} item={item.Route} name={item.name} />
                        )
                    })
                }
            </div>
            {
                isLogin ?
                    <div onClick={() => {
                        setShowProfile(!showProfile)
                    }} className='h-10 w-10 relative bg-yellow-500 rounded-full cursor-pointer'>
                        <img className='rounded-full' src={profile?.image || ""} alt="" />


                        {
                            showProfile &&
                            <div className="absolute flex flex-col items-start gap-4 bg-white shadow-md -left-8 top-6 p-2 z-50 rounded-md">
                                <Link className='text-xs' to={"/profile"}>Profile</Link>
                                <div onClick={() => {
                                    localStorage.removeItem("token")
                                    window.location.reload()
                                }} className="text-xs">Logout</div>
                            </div>
                        }
                    </div> :
                    <div className='authentikasi flex items-center gap-x-4 order-3'>
                        <button onClick={() => {
                            navigation('/signin')
                        }} className='px-8 py-2 items-center justify-center shadow-md rounded-3xl'>Sign In</button>
                        <div onClick={() => {
                            navigation('/signup')
                        }} className='px-8 py-2  cursor-pointer items-center justify-center bg-orange-950 text text-white rounded-3xl'>Sign Up</div>
                    </div>
            }
        </div>
    )
}

export default Navbar
