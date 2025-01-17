import React from 'react';
import { Camera, Play, Film, Mail, Instagram, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div> <h1 className="text-4xl font-bold">Nithin Potharaju</h1>
            <h2 className="text-2xl font-semibold text-gray-700">Cinematographer & Colorist</h2> </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-red-500 transition">Home</a>
            <a href="#portfolio" className="hover:text-red-500 transition">Bio</a>
            <a href="#Films" className="hover:text-red-500 transition">Films</a>
            <a href="#Brands" className="hover:text-red-500 transition">Brands</a>
            <a href="#gallery" className="hover:text-red-500 transition">Gallery</a>
            <a href="#ContactUs" className="hover:text-red-500 transition">Contact Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section id="home" className="relative min-h-screen pt-24 pb-20 px-4">
        <div className="absolute inset-0 overflow-hidden z-0">
          <video
            className="w-full h-full object-cover"
            src="public/assets/video/showreelr.mp4" // Replace with the actual path to your video file
            autoPlay
            loop
            
          ></video>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay to darken the video */}
        </div>
        <div className="relative container mx-auto z-10">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-0">
            {/* Add any other content here */}
          </div>
        </div>
      </section>

      {/* Main Stream Movies Section */}
      <section id="Films" className="py-20 bg-[#1a1d24]">
        <div  className="container mx-auto px-4">
          <h2  className="text-4xl font-bold mb-8">Movies</h2>
          <p className="text-gray-400 mb-12">Feature Films & Major Productions</p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                title: "POTTEL",
                role: "Director of Photography",
                image: "public/assets/Images/pottel_movie_poster.png"
              },
              {
                title: "AAY",
                role: "Assistant Cinematographer",
                image: "public/assets/Images/aay_movie_poster.jpg",
              },
              {
                title: "MAA NAANA SUPER HERO",
                role: "Assistant Cinematographer",
                image: "public/assets/Images/ma_naana_superhero_poster.jpg",
              },
              {
                title: "Movie Title 4",
                role: "Camera Operator",
                image: "public/assets/Images/Vyuham_film_poster.jpg",
              },
              {
                title: "Yathbhava",
                role: "Director of Photography",
                image: "public/assets/Images/Yathbhava.JPG"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">Commercials</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Brand Commercial 1",
                year: "2024",
                image: "https://images.unsplash.com/photo-1585951237317-1979e4df7389?q=80&w=800"
              },
              {
                title: "Brand Commercial 2",
                year: "2023",
                image: "https://images.unsplash.com/photo-1585951237318-1979e4df7390?q=80&w=800"
              },
              {
                title: "Brand Commercial 3",
                year: "2023",
                image: "https://images.unsplash.com/photo-1585951237319-1979e4df7391?q=80&w=800"
              },
              {
                title: "Brand Commercial 4",
                year: "2022",
                image: "https://images.unsplash.com/photo-1585951237320-1979e4df7392?q=80&w=800"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-400">{item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short Films Section */}
      <section className="py-20 bg-[#1a1d24]">
        <div className="container mx-auto px-5">
          <h2 className="text-4x1 font-bold mb-16">Short Films</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Kittu Katha",
                description: "Graduation Film",
                image: "public/assets/Images/Kittu_Katha.png.png",
              },
              {
                title: "Swecha",
                description: "Academic Work",
                image: "public/assets/Images/Swechapot.jpg",
              },
              {
                title: "Jaabu",
                description: "Short Film",
                image: "public/assets/Images/Jaabu.PNG"
              },
              {
                title: "Nails",
                description: "Short Film",
                image: "public/assets/Images/Nails.png",
              }
            ].map((item, index) => (
              <div key={index} className="aspect-[4/5] bg-gray-800 rounded-lg overflow-hidden group relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section  id="Brands" className="py-20">
        <div className="container mx-auto px-0">
          <h2 className="text-4xl font-bold text-center mb-16">Brands Worked With</h2>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-8 items-center">
            {["public/assets/Logos/Tata_Curve.png", 
            "public/assets/Logos/Annapurna_studios.JPG",
            "public/assets/Logos/Annapurna_college_of_film_&_Media.jpg",
            "public/assets/Logos/KTM.PNG", 
            "public/assets/Logos/Hero.PNG", 
             "public/assets/Logos/Power_Drift.png", 
             "public/assets/Logos/Ather.JPG",
            ].map((src, index) => (
              <div key={index} className="w-full h-30 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300">
                <img
                  src={src}
                  alt={`Brand ${index}`}
                  className="w-full h-23 object-cover " // Updated height
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#1a1d24] py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & About */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Nithin Potharaju</h3>
              <p className="text-gray-400">© 2024. All rights reserved.</p>
            </div>

            {/* Movies */}
            <div>
              <h4 className="text-lg font-bold mb-4">Movies</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-500">Film News</a></li>
                <li><a href="#" className="hover:text-red-500">Coming Soon</a></li>
                <li><a href="#" className="hover:text-red-500">Most Popular</a></li>
                <li><a href="#" className="hover:text-red-500">Top Trailers</a></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Additional Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-red-500">About</a></li>
                <li><a href="#" className="hover:text-red-500">Gallery</a></li>
                <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-500">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Newsletter sign up"
                  className="bg-gray-800 px-4 py-2 rounded-l-lg focus:outline-none"
                />
                <button className="bg-red-500 px-4 py-2 rounded-r-lg hover:bg-red-600">
                  Subscribe
                </button>
              </div>
              <div   id="ContactUs" className="flex space-x-4 mt-6">
                <a href="www.instagram.com" className="text-gray-400 hover:text-red-500">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;