import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import Footer from '../../components/Footer'

const Profile = () => {
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

    return (
        <div>
            <Navbar />
            {/* profile */}
            <div className='flex flex-col md:flex-row items-start justify-center gap-12 md:py-14 md:px-28 p-4'>
                <div className="w-1/4 h-[400px] shadow-xl flex flex-col items-center justify-center p-8 gap-4 rounded-md">
                    <div className='flex flex-row justify-end items-end'>
                        <div className='flex flex-row items-center justify-center'>
                            <img src={profile?.image || ""} alt=" profile img" className='rounded-full object-cover' />
                        </div>
                        <div className='w-10 h-10 rounded-full absolute bg-orange-950 flex items-center justify-center mr-5 mb-2'>
                            <img src="/images/icon pen.png" alt="icon pen" />
                        </div>
                    </div>
                    <div className="text-xl font-bold">{profile?.name}</div>
                    <div className="text-md text-gray-500">{profile.email}</div>
                    <p className='text-md text-gray-600'>Has been ordered 15 products</p>
                </div>
                <div className="w-full md:w-3/4 h-[400px] p-8 rounded-md shadow-xl">
                    <div className="flex items-center justify-between">
                        <div className="text-lg text-gray-600 font-bold">Contacts</div>
                        <div className='w-10 h-10 rounded-full bg-orange-950 flex items-center justify-center mr-5 mb-2'>
                            <img src="/images/icon pen.png" alt="icon pen" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className='flex items-start flex-col gap-2 justify-start'>
                            <label className='text-gray-500' htmlFor="email-address">Email Address :</label>
                            <input defaultValue={profile?.email || ""} id='email-address' type="text" className='w-full outline-none border-b border-black' />
                        </div>
                        <div className='flex items-start flex-col gap-2 justify-start'>
                            <label className='text-gray-500' htmlFor="email-address">Mobile Number :</label>
                            <input defaultValue={profile?.number || ""} id='email-address' type="text" className='w-full outline-none border-b border-black' />
                        </div>
                        <div className='flex items-start flex-col gap-2 justify-start'>
                            <label className='text-gray-500' htmlFor="email-address">Delivery Address :</label>
                            <input id='email-address' type="text" className='w-full outline-none border-b border-black' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center md:items-end justify-center md:px-28 md:py-14 p-4 gap-12">
                <div className="w-full md:w-full lg:w-3/4 h-full md:h-full lg:h-[418px] shadow-xl rounded-lg p-8 gap-4">
                    <div className="flex items-center justify-between">
                        <div className="text-lg text-gray-950 font-bold">Details</div>
                        <div className='w-10 h-10 rounded-full bg-orange-950 flex items-center justify-center mr-5 mb-2'>
                            <img src="/images/icon pen.png" alt="icon pen" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                        <div className="flex items-start justify-center flex-col col-span-2 gap-4">
                            <label className="text-gray-500" htmlFor="display-name">
                                Display Name :
                            </label>
                            <input
                                id="display-name"
                                type="text"
                                className="w-full outline-none border-b-2 border-black"
                            />
                        </div>
                        <div className="flex items-start justify-center flex-col gap-4">
                            <label className="text-gray-500" htmlFor="date">
                                DD/MM/YY
                            </label>
                            <input
                                id="date"
                                type="date"
                                className="w-full outline-none border-b-2 border-black"
                            />
                        </div>
                        <div className="flex items-start justify-center flex-col col-span-2 gap-4">
                            <label className="text-gray-500" htmlFor="firs-name">
                                First Name :
                            </label>
                            <input
                                id="firs-name"
                                type="text"
                                className="w-full outline-none border-b-2 border-black"
                            />
                        </div>
                        <div className="flex flex-col items-start  justify-center gap-4">
                            <div className="flex flex-row justify-center gap-2">
                                <div className="h-6 w-6 relative  border-4 border-gray-500 rounded-full cursor-pointer"></div>
                                <h1 className="text-gray-500">Male</h1>
                            </div>
                            <div className="flex flex-row  justify-center gap-2">
                                <div className="h-6 w-6 relative  border-4 border-gray-500 rounded-full cursor-pointer"></div>
                                <h1 className="text-gray-500">Female</h1>
                            </div>
                        </div>
                        <div className="flex items-start justify-center flex-col col-span-2 gap-4">
                            <label className="text-gray-500" htmlFor="last-name">
                                Last Name :
                            </label>
                            <input
                                id="last-name"
                                type="text"
                                className="w-full outline-none border-b-2 border-black"
                            />
                        </div>

                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <button className="w-full md:w-full lg:w-[330px] h-[60px] bg-[#6A4029] rounded-[20px] text-white font-bold">
                            Save Change
                        </button>
                        <button className="w-full md:w-full lg:w-[330px] h-[60px] bg-[#FFBA33] rounded-[20px] text-[#6A4029] font-bold">
                            Cancel
                        </button>
                        <button className="w-[330px] h-[60px] border-2 border-gray-500 rounded-[20px] text-[#6A4029] font-bold text-left px-4">
                            Edit Password
                        </button>
                        <button className="w-[330px] h-[60px] border-2 border-gray-500 rounded-[20px] text-[#6A4029] font-bold text-left px-4">
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
