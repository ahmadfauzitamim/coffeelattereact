import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Promo = () => {
    const [promo, setPromo] = useState([])
    const getPromo = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/promotions?orderBy=id&sortBy=ASC&limit=10&page=1`)
            console.log(response);
            setPromo(response?.data?.data)
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        getPromo()
    }, [])
    return (
        <>
            <div className='flex flex-col w-2/4 justify-between items-center py-30 gap-8 border-r-2 pb-28'>
                <div className='relative'>
                    <h1 className='flex flex-col text-2xl font-bold text-red-950 py-10'>Promo for you</h1>
                    <span className=''>Coupons will be updated every weeks. <br /> Check them out! </span>
                </div>
                <div className='flex flex-col w-full items-center justify-between'>
                    {
                        promo.map((item, index) => {
                            return (
                                <div className='flex flex-col items-center'>
                                    <div className='top-52 mt-24 flex flex-col absolute justify-center items-center gap-8 w-[284px] h-[472] rounded-3xl bg-red-500 py-12'>
                                        <div key={index[0]} className='flex flex-col gab-8 items-center'>
                                            <div className='flex flex-col gap-2 items-center'>
                                                <img className='rounded-full shadow-lg shadow-gray-400 w-3/5' src={item.image} alt="" />
                                                <div className='flex flex-col text-2xl font-bold'>{item.productName}</div>
                                                <div className='flex flex-col'>{item.description}</div>
                                            </div>
                                            <div className='w-full relative border-b-2 p-2 border-black border-dashed'></div>
                                            <div className='flex flex-col gap-2'>
                                                <div className='p-2'>COUPONCODE</div>
                                                <div className='text-md font-bold text-3xl'>{item.cuponcode}</div>
                                                <div className='text-sm'>{item.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='top-[325px] ml-24 flex flex-col -z-[999] absolute justify-between items-center w-[284] h-[375px] rounded-3xl bg-black'>
                                    <div key={index[1]} className='flex flex-col gab-8 items-center'>
                                            <div className='flex flex-col gap-2 items-center'>
                                                <img className='rounded-full shadow-lg shadow-gray-400 w-3/5' src={item.image} alt="" />
                                                <div className='flex flex-col text-2xl font-bold'>{item.productName}</div>
                                                <div className='flex flex-col'>{item.description}</div>
                                            </div>
                                            <div className='w-full relative border-b-2 p-2 border-black border-dashed'></div>
                                            <div className='flex flex-col gap-2'>
                                                <div className='p-2'>COUPONCODE</div>
                                                <div className='text-md font-bold text-3xl'>{item.cuponcode}</div>
                                                <div className='text-sm'>{item.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='top-[340px] ml-32 flex flex-col -z-[9999] absolute justify-between items-center w-[284] h-[338px] rounded-3xl bg-red-950'>
                                    <div key={index[2]} className='flex flex-col gab-8 items-center'>
                                            <div className='flex flex-col gap-2 items-center'>
                                                <img className='rounded-full shadow-lg shadow-gray-400 w-3/5' src={item.image} alt="" />
                                                <div className='flex flex-col text-2xl font-bold'>{item.productName}</div>
                                                <div className='flex flex-col'>{item.description}</div>
                                            </div>
                                            <div className='w-full relative border-b-2 p-2 border-black border-dashed'></div>
                                            <div className='flex flex-col gap-2'>
                                                <div className='p-2'>COUPONCODE</div>
                                                <div className='text-md font-bold text-3xl'>{item.cuponcode}</div>
                                                <div className='text-sm'>{item.date}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='flex flex-col items-center gap-2'>
                    <div className='flex w-[284px] justify-center items-center bg-orange-950 rounded-3xl text-white py-4'>Apply Coupon</div>
                    <div className='flex flex-col items-start justify-center list-none '>
                    <h1 className='font-bold '>Trems and Condition</h1>
                    <li>1. You can only apply 1 coupon per day</li>
                    <li>2. It only for dine in</li>
                    <li>3. Buy 1 get 1 only for new user</li>
                    <li>4. Should make member card to apply coupon</li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promo
