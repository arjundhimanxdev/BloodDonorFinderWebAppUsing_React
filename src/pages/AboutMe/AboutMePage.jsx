import { FaUsers, FaHeart, FaGlobe, FaHandsHelping } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMePage = () => {
  return (
    <div className=" rounded-lg min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white p-10">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-400">About Us</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          We are on a mission to save lives by connecting donors with those in need.  
          Our platform empowers communities to come together and make a difference.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg text-center">
          <FaUsers className="text-4xl mx-auto text-pink-400 mb-4" />
          <h3 className="text-xl font-semibold">10,000+</h3>
          <p className="text-gray-300">Registered Donors</p>
        </div>
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg text-center">
          <FaHeart className="text-4xl mx-auto text-red-400 mb-4" />
          <h3 className="text-xl font-semibold">5,000+</h3>
          <p className="text-gray-300">Lives Saved</p>
        </div>
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-lg text-center">
          <FaGlobe className="text-4xl mx-auto text-green-400 mb-4" />
          <h3 className="text-xl font-semibold">15+</h3>
          <p className="text-gray-300">Countries Reached</p>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg mb-16">
        <h2 className="text-2xl font-bold mb-4 text-pink-400">Our Story</h2>
        <p className="text-gray-300 leading-relaxed">
          Our journey started with a simple idea: to make it easier for people to
          connect with blood donors in times of emergency. Over the years, we have
          built a strong community that values compassion, responsibility, and unity.  
          With every donor who joins, we move one step closer to making sure no life
          is lost due to lack of timely blood.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us in Saving Lives</h2>
        <p className="text-gray-300 mb-6">
          Be part of our mission. Register today as a donor and become someone's hero.
        </p>
        <Link to="/donors/add" className=" cursor-pointer bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition">
          Become a Donor
        </Link>
      </div>
    </div>
  );
};

export default AboutMePage;
