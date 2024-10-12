import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



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
            const response = await axios.get('http://localhost:5000/user/profile', {
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

    return (
        <div className='w-full flex items-center justify-between p-8'>
            <div className='logo font-bold text-lg'>coffeelatte</div>
            <div className='navigasi flex items-center justify-center gap-x-8 list-none'>
                <li onClick={() => {
                    navigation("/")
                }} className='cursor-pointer hover:text-orange-900 hover:font-bold'>Home</li>
                <Link to={'/product'} className='cursor-pointer hover:text-orange-900 hover:font-bold'> Product</Link>
                <Link to={'/cart'} className='cursor-pointer hover:text-orange-900 hover:font-bold'>Your Cart</Link>
                <Link to={'/history'} className='cursor-pointer hover:text-orange-900 hover:font-bold'>History</Link>
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
                    <div className='authentikasi flex items-center gap-x-4'>
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
