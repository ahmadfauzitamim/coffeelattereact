import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="header items-center justify-center">
          <div className="background absolute">
            <img src="/images/background.png" alt />
          </div>
          <div className="content relative">
            <div className="conten-hero relative">
              <div className=" flex justify-end ">
                <div className="flex relative p-8 w-50 h-28 ">
                  {/* <img className="icon-search  h-10" src="/images/search.svg" alt="search.svg" /> */}
                  <input className="placeholder-search rounded-3xl border-none" type="text" placeholder="Search" />
                </div>
              </div>
            </div>
            <div className="judul text-white text-left gap-4 flex flex-col pl-20">
              <h1 className='text-3xl font-bold'>Start Your Day with <br /> Coffee and Good Meals</h1>
              <p>We provide high quality beans, good taste, and healthy <br /> meals made by love just for you. Start your day with us <br /> for a bigger smile!</p>
              <div className='w-[250px] h-[60px] bg-amber-500 items-center justify-center flex rounded-2xl '>
                <button className="text-orange-950 font-bold">Get Started</button>
              </div>
            </div>
          </div>
          <div className=" h-[200px] flex flex-col relative bg-white shadow-md top-52 left-[180px] w-3/4 justify-center rounded-2xl ">
            <div>
              <div className="isi-box flex flex-row items-center justify-around ">
                <div className="icon-left flex flex-row items-center gap-4">
                  <img src="/images/icon-user.svg" alt />
                  <div className="staff">
                    <h3>90+</h3>
                    <span>Staff</span>
                  </div>
                </div>
                <div className="icon-center flex flex-row gap-4">
                  <img src="/images/icon-location.svg" alt />
                  <div className="stores">
                    <h3>30+</h3>
                    <span>Stores</span>
                  </div>
                </div>
                <div className="icon-right flex flex-row ">
                  <div className="icon-love flex relative justify-center items-center">
                    <img className="bulat" src="/images/bulat.svg" alt />
                    <img className="love relative right-11" src="/images/icon-love.svg" alt />
                  </div>
                  <div className="customers">
                    <h3>800+</h3>
                    <span>Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Provider */}
        <div className="container-provide flex flex-row pt-[300px] justify-center items-center gap-20">
          <div className="img-provide">
            <img src="/images/image.png" alt />
          </div>
          <div className="text-provide flex flex-col gap-5 items-start list-none ">
            <h1 className='text-3xl font-bold'>We Provide Good Coffee <br /> and Healthy Meals</h1>
            <p>You can explore the menu that we provide with fun and <br /> have their own taste and make your day better.</p>
            <div className="list">
              <li>✅ High quality beans</li>
            </div>
            <div className="list">
              <li>✅ Healthy meals, you can request the ingredients</li>
            </div>
            <div className="list">
              <li>✅ Chat with our staff to get better experience for ordering</li>
            </div>
            <div className="list">
              <li>✅ Free member card with a minimum purchase of IDR 200.000.</li>
            </div>
          </div>
        </div>
        {/* Here is People’s Favorite */}
        <div className="container-people justify-center items-center">
          <div className="content-people flex flex-col gap-5">
            <h1 className='font-bold text-3xl '>Here is People’s Favorite</h1>
            <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
          </div>
          <div className="box-people flex flex-row items-center justify-around py-5 p-20">
            <div className="box-1 border border-gray-400 py-5 px-5 h-[600px] flex flex-col items-center justify-between">
              <img src="/images/Hazelnut Latte1.png" alt="Hazelnut Latte" />
              <h3 className='font-bold'>Hazelnut Latte</h3>
              <ul className="list-Hazelnut text-left flex flex-col gap-5">
                <li>✔ Hazelnut Syrup</li>
                <li>✔ Wanilla Whipped Cream</li>
                <li>✔ Ice / Hot</li>
                <li>✔ Sliced Banana on Top</li>
              </ul>
              <div className="idr">
                <h2>IDR 25.000</h2>
                <button className="btn-ordernow">Order Now</button>
              </div>
            </div>
            <div className="box-2 border border-gray-400 py-5 h-[600px] px-5 flex flex-col  items-center justify-between ">
              <img src="/images/Pinky Promise1.png" alt="Pinky Promise" />
              <h3 className='font-bold'>Pinky Promise</h3>
              <ul className="list-Pinky text-left flex flex-col gap-5">
                <li>✔ 1 Shot of Coffee</li>
                <li>✔ Vanilla Whipped Cream</li>
                <li>✔ Chocolate Biscuits</li>
                <li>✔ Strawberry Syrup</li>
                <li>✔ Sliced strawberry on Top</li>
              </ul>
              <div className="idr-pinky">
                <h2>IDR 30.000</h2>
                <button className="btn-select1">Select</button>
              </div>
            </div>
            <div className="box-3 border border-gray-400  py-5 px-5 h-[600px] flex flex-col  items-center justify-between">
              <img src="/images/Chicken Wings1.png" alt="Chicken Wings" />
              <h3 className='font-bold'>Chicken Wings</h3>
              <ul className="list-chicken text-left flex flex-col gap-5">
                <li>✔ Wings</li>
                <li>✔Drum Sticks</li>
                <li>✔ Mayonaise and Lemon</li>
                <li>✔ Hot Fried</li>
                <li>✔ Secret Recipe</li>
                <li>✔ Buy 1 Get 1 only for Dine in</li>
              </ul>
              <div className="idr-chicken">
                <h2>IDR 40.000</h2>
                <button className="btn-chicken">Select</button>
              </div>
            </div>
          </div>
        </div>
        {/* Visit Our Store */}
        <div className="visit p-5">
          <div className="content-visit">
            <div className="judul-content flex flex-col gap-5">
              <h1 className='text-3xl font-bold'>Visit Our Store in the <br /> Spot on the Map Below</h1>
              <p>See our store in every city on the spot and spen your good day there. <br /> See you soon!</p>
            </div>
            <div className="peta mt-20">
              <img src="/images/Huge Global.png" alt />
            </div>
          </div>
        </div>
        {/* Partner */}
        <div className="container-partner">
          <h1 className='text-3xl font-bold'>Our Partner</h1>
          <div className="partner">
            <div className="content-partner">
              <div className="logo-partner flex flex-row items-center justify-center">
                <img src="/images/netfilx.svg" alt="netfilx" />
                <img src="/images/reddit.svg" alt="reddit" />
                <img src="/images/amazon.svg" alt="amazon" />
                <img src="/images/discord.svg" alt="discord" />
                <img src="/images/spotify.svg" alt="spotify" />
              </div>
            </div>
          </div>
          {/* Slider */}
          <div className="container-slider">
            <div className="judul-slider flex flex-col gap-10">
              <h1 className='text-3xl font-bold p-10'>Loved by Thousands of <br /> Happy Customer</h1>
              <p>These are the stories of our customers who have visited us with great <br /> pleasure.</p>
            </div>
            <div className="box-slider flex flex-row items-center justify-center mt-5 gap-3">
              <div className="box-slider-1 border border-gray-400 ">
                <div className="nama-1">
                  <img src="/images/Viezh Robert.png" alt />
                  <div className="nama-viezh-robert">
                    <div className="robert">
                      <p className="viezh-robert font-bold">
                        Viezh Robert
                      </p>
                      <span className="warsaw ">Warsaw, Poland</span>
                    </div>
                    <div className="rating flex flex-row ">
                      <span>4.5</span>
                      <img src="/images/star.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="coment">
                  <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                </div>
              </div>
              <div className="box-slider-1 border border-gray-400">
                <div className="nama-1">
                  <img src="/images/Yessica Christy.png" alt />
                  <div className="nama-viezh-robert">
                    <div className="robert">
                      <p className="viezh-robert font-bold"> Yessica Christy</p>
                      <span className="warsaw">Shanxi, China</span>
                    </div>
                    <div className="rating flex flex-row">
                      <span>4.5</span>
                      <img src="/images/star.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="coment">
                  <p>“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte</p>
                </div>
              </div>
              <div className="box-slider-1 border border-gray-400 ">
                <div className="nama-1">
                  <img src="/images/Kim Young Jou.png" alt />
                  <div className="nama-viezh-robert">
                    <div className="robert2">
                      <p className="viezh-robert font-bold">Kim Young Jou</p>
                      <span className="warsaw">Seoul, South Korea</span>
                    </div>
                    <div className="rating-3  flex flex-row">
                      <span>4.5</span>
                      <img src="/images/star.svg" alt />
                    </div>
                  </div>
                </div>
                <div className="coment">
                  <p>“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!</p>
                </div>
              </div>
            </div>
            <div className="navigasi">
              <div className="titik">
                <img src="/images/titik-titik.svg" alt />
              </div>
              <div className="panah pl-96">
                <img src="/images/left.svg" alt />
                <img className="panah-right" src="/images/left.svg" alt />
              </div>
            </div>
          </div>
        </div>

        {/* Promo */}
        <div className="promo-home  w-[70%] ml-[200px] rounded-xl py-20 ">
          <div className="content-promo-home shadow-md bg-white flex flex-row items-center justify-between p-10">
            <div className="text-promo-home text-left">
              <h1 className='text-3xl font-bold'>Check our promo <br /> today!</h1>
              <p>Let's see the deals and pick yours!</p>
            </div>
            <div className="btn-promo-home bg-yellow-500 flex place-items-start justify-between rounded-md h-[50px] pl-20 left-[970px] ">
              <button>See Promo</button>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Home

