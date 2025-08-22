import { FaDroplet } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { NavLink, Outlet, Link } from 'react-router-dom';


const PublicLayout = () => {

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
   
    <header className="bg-white shadow-xl shadow-gray-500/60 w-[100%] h-22 items-center flex justify-between">
        <section className="flex gap-1 justify-center items-center">
          <FaDroplet className="text-red-700  w-10 h-8"/>
          <Link to="donors" className=" cursor-pointer text-2xl font-bold text-red-700 flex">Blood Donor</Link>
        </section>
        <section className="sm:flex-col pl-5 flex items-center">
          <ul className="flex md:pl-[30rem]  md:gap-8 gap-4">
            <li><NavLink to="/donors" className="md:text-xl text-gray-600 font-semibold hover:text-red-700 ">Donors</NavLink></li>
            <li><NavLink to="/about-us" className="md:text-xl text-gray-600 font-semibold hover:text-red-700">About Us</NavLink></li>
            <li><NavLink to="/contact-us" className="md:text-xl text-gray-600 font-semibold hover:text-red-700">Contact Us</NavLink></li>
            <li><NavLink to="/setting" className="md:text-xl text-gray-600 font-semibold hover:text-red-700">Settings</NavLink></li>
          </ul>
        </section>
        <section className='flex items-center gap-4 mr-3'>
          <IoSearch className='hover:text-black cursor-pointer w-8 h-6 text-gray-400'/>
          <IoIosContact className=' cursor-pointer w-10 h-10 hover:text-black text-gray-400'/>
        </section>
    </header>


    <main>
      <Outlet />
    </main>





    <div>
      <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1682309704250-6bac0f499665?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white/80 p-8 rounded-2xl shadow-xl max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Section */}
        <div>
          <h1 className="text-5xl font-extrabold text-red-600 leading-tight">
            DONATE BLOOD <br /> TODAY!
          </h1>
          <h2 className="text-2xl font-bold text-red-500 mt-4">
            YOU CAN HELP SAVE A LIFE!
          </h2>
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque eget mi auctor, maximus urna quis, suscipit tortor. 
            Sed nunc dolor, pretium at est imperdiet, dapibus condimentum est.
          </p>

          {/* Button */}
          <button
            onClick={handleScrollToTop}
            className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            Visit My Website
          </button>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-6 text-red-600 text-2xl">
            <a href="#" className="hover:text-red-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-red-700">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-red-700">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src="https://www.shutterstock.com/image-vector/people-blood-donation-concept-volunteers-600nw-2465102413.jpg"
            alt="Donate Blood Illustration"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    </div>


    <footer className="bg-red-600 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-white">🩸 Blood Donor</span>
          </h2>
          <p className="mt-3 text-sm text-gray-200">
            Helping people connect with life-saving blood donors. 
            Donate blood, save lives, and make a difference today.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about-us" className="hover:underline">Dashboard</a></li>
            <li><a href="/donors" className="hover:underline">Donors</a></li>
            <li><a href="/settings" className="hover:underline">Settings</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200">🌐</a>
            <a href="#" className="hover:text-gray-200">🐦</a>
            <a href="#" className="hover:text-gray-200">📘</a>
            <a href="#" className="hover:text-gray-200">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-700 text-center py-3 text-sm text-gray-200">
        © 2025 Blood Donor | All Rights Reserved
      </div>
    </footer>
    
    </>
  )
}

export default PublicLayout