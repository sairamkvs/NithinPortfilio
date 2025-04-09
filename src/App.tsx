import React from 'react';
import { Camera, Play, Film, Mail, Instagram, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';



function App() {
  
    const [showModal, setShowModal] = useState(false);
 
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 z-30">
        <div className="flex flex-col md:flex-row justify-between items-center py-2 md:py-2 bg-gray-800 text-white px-4 md:px-6">
          <div className="text-center md:text-left mb-2 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold">Nithin Potharaju</h1>
            <h2 className="text-lg md:text-1xl font-semibold text-gray-400">Cinematographer & Colorist</h2>
          </div>
          <nav className="flex flex-row space-x-2 md:space-x-8 mt-4 md:mt-0 justify-center md:justify-end">
            <a href="#home" className="hover:text-red-500 transition">Home</a>
            <a href="#bio" className="hover:text-red-500 transition">Bio</a>
            <a href="#Films" className="hover:text-red-500 transition">Films</a>
            <a href="#Brands" className="hover:text-red-500 transition">Brands</a>
            {/* Header <a href="#gallery" className="hover:text-red-500 transition">Gallery</a>*/}
            <a href="#ContactUs" className="hover:text-red-500 transition">ContactUs</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section id="home" className="relative min-h-screen pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0">
          <video
            className="absolute w-full h-full object-fit cover"
            src="assets/video/Showreel_Website.mp4" // Replace with the actual path to your video file
            autoPlay
            loop
            muted
          ></video>
          {/*<video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="assets/video/ShowreelM_1080p.mp4" type="video/mp4" media="(min-width: 1024px)" />
            <source src="assets/video/ShowreelM_720p.mp4" type="video/mp4" media="(min-width: 768px)" />
            <source src="assets/video/ShowreelM_480p.mp4" type="video/mp4" />
          </video>*/}
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional overlay to darken the video */}
        </div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-20 bg-[#1a1d24] ">
        <div className="container mx-auto px-4 md:flex md:items-center">
          <div className="md:w-1/2 md:pr-10"> {/* Adjusted padding */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">BIO</h2>
            <p className="text-gray-400 ">
              I’m Nithin Potharaju, a cinematographer and colorist passionate about storytelling through visuals. My journey in the film and television industry has allowed me to work on a diverse range of projects, where I strive to bring a unique aesthetic and creative vision to each endeavor.
              I focus on crafting atmospheric moods and visual narratives that resonate with audiences. I believe that the magic of filmmaking lies in the details, and I am always eager to experiment with innovative techniques and modern technologies to enhance the storytelling experience.
              When I’m not behind the camera, you can find me exploring new narratives or diving into the world of color grading – always looking for ways to push the boundaries of visual art.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="assets/Images/NITHIN.png" // Replace with the actual path to your image
              alt="Nithin Potharaju"
              className="w-full h-auto aspect-square object-cover rounded-lg mb-8 md:mb-0"
            />
          </div>
        </div>
      </section>

      {/* YouTube Link Section 
      <section id="youtube-link" className="py-20 bg-[#1a1d24] text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Showreel 2024</h2>
          <div className="embed-responsive embed-responsive-16by9 mb-4">
            <img
              src="/assets/Images/Showreel-TN.png" // Replace with the actual path to your image
              alt="Watch My Showreel"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <a
            href="https://youtu.be/MBvsVObj2v0"
            className="text-lg text-white hover:underline"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security feature to prevent malicious activities
          >
            Watch My Showreel on YouTube
          </a>
        </div>
      </section> */}

      {/* YouTube Link Section working Real
      <section id="youtube-link" className="py-20 bg-[#1a1d24] text-center">
        <div className="container mx-auto">
          <h2 className="text-1xl md:text-5xl font-bold mb-4">Showreel 2024</h2>

          {/* Thumbnail with Overlay 
          <div className="relative inline-block mb-4">
            {/* Thumbnail Image 
            <img
              src="assets/Images/Showreel-TN.png" // Update the path accordingly
              alt="Watch My Showreel"
              className="w-full h-auto rounded-lg cursor-pointer"
              onClick={() => window.open('https://www.youtube.com/watch?v=MBvsVObj2v0', 'VideoPlayer', 'width=800,height=600')}
            />
            {/* Overlay with Play Button and Text 
            <div
              className="absolute bottom-4 left-0 right-0 flex items-center justify-center"
              onClick={() => window.open('https://www.youtube.com/watch?v=MBvsVObj2v0', 'VideoPlayer', 'width=800,height=600')}
            >
                <img
                  src="assets/Logos/play-video-white.png" // Update the path accordingly
                  alt="Play Button"
                  className="w-12 h-12 mr-2"
                />
                <span
          className="text-3xl font-semibold text-white hover:text-red-500 cursor-pointer"
        >
          Watch My Showreel
        </span>
            </div>
          </div>
        </div>
      </section>* /}
      

      {/* YouTube Link Section Try new Working POP-UP*/}
      <section id="youtube-link" className="py-20 bg-[#1a1d24] text-center">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-2xl font-bold mb-4">ShowReel 2024</h2>

        {/* Thumbnail with Overlay */}
        <div className="relative inline-block mb-4">
          {/* Thumbnail Image */}
          <img
            src="assets/Images/Showreel-TN.png"
            alt="Watch My Showreel"
            className="w-full h-auto rounded-lg cursor-pointer"
            onClick={() => setShowModal(true)}
          />
          {/* Overlay with Play Button and Text */}
          <div
            className="text-1xl absolute bottom-4 left-4 right-4 flex items-left justify-left cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <img
              src="assets/Logos/play-video-white.png"
              alt="Play Button"
              className="w-9 h-9 mr-2"
            />
            <span className="text-center  font-semibold text-white hover:text-red-500">
              Watch My ShowReel
            </span>
          </div>
        </div>

        {/* Modal for Video */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative bg-black p-4 rounded-lg w-full max-w-2xl">
              <button
                className="absolute top-2 right-2 text-white text-3xl"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/MBvsVObj2v0?autoplay=1"
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>


    {/* Main Stream Movies Section */ }
    < section id = "Films" className = "py-20 bg-[#1a1d24]" >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Movies</h2>
        <p className="text-gray-400 mb-12 text-xl md:text-2xl text-center">Feature Films & Major Productions</p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
          {[
            {
              title: "POTTEL - 2024",
              role: "Associate cinematographer",
              image: "assets/Images/pottel_movie_poster.png"
            },
            {
              title: "AAY - 2024",
              role: "Assistant Cinematographer",
              image: "assets/Images/aay_movie_poster.jpg",
            },
            {
              title: "MAA NAANA SUPER HERO - 2024",
              role: "Assistant Cinematographer",
              image: "assets/Images/ma_naana_superhero_poster.jpg",
            },
            {
              title: "Shapadham - 2024",
              role: "Associate Cinematographer",
              image: "assets/Images/Vyuham_film_poster.jpg",
            },
            {
              title: "Yathbhava - 2024",
              role: "2nd Unit Cinematographer ",
              image: "assets/Images/Yathbhava.JPG"
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
        </section >


  {/* Commercials Section 
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
      </section>*/}

  {/* Short Films Section */ }
  <section className="py-20 bg-[#1a1d24]">
    <div className="container mx-auto px-5">
      <h2 className="text-4xl font-bold mb-16 text-center">Short Films</h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 text-center">
        {[
          {
            title: "Kittu Katha",
            description: "Graduation Film- DOP & Colorist",
            image: "assets/Images/Kittu_Katha.png.PNG",
          },
          {
            title: "Swecha",
            description: "Academic Work- DOP & Colorist ",
            image: "assets/Images/Swechapot.JPG",
          },
          {
            title: "Jaabu",
            description: "Academic Work- DOP & Colorist ",
            image: "assets/Images/Jaabu.PNG"
          },
          {
            title: "Nails",
            description: "Shortfilm- Colorist",
            image: "assets/Images/Nails.PNG",
          },
          {
            title: "Portrait of Chitra",
            description: "Shortfilm- Colorist",
            image: "assets/Images/Chitra.png",
          },
          {
            title: "Michael",
            description: "Shortfilm- Editor & Colorist",
            image: "/assets/Images/Michael.png",
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
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>




  {/* Brand Logos Section https://www.youtube.com/embed/MBvsVObj2v0*/ }
  <section id="Brands" className="py-20">
    <div className="container mx-auto px-0">
      <h2 className="text-4xl font-bold text-center mb-16">In collaboration</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
        {["assets/Logos/Annapurna_college_of_film_&_Media.JPG",
          "/assets/Logos/Annapurna_studios.JPG",
          "/assets/Logos/GA2.jpg",
          "/assets/Logos/UV.jpg",
          "assets/Logos/Power_Drift.PNG",
          "assets/Logos/ktm.jpg",
          "assets/Logos/Hero.jpg",
          "assets/Logos/Tata_Curve.PNG",
          "assets/Logos/Ather.JPG",
          "/assets/Logos/amazon-prime.avif",
          "/assets/Logos/aha.png",
          "/assets/Logos/Zee-Cafe.jpg"
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


  {/* Footer */ }
  <footer id="ContactUs" className="bg-[#1a1d24] py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Nithin Potharaju</h3>
          <p className="text-gray-400">© 2024. All rights reserved.</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#bio" className="hover:text-red-500">About</a></li>
            <li><a href="#Films" className="hover:text-red-500">Most Popular</a></li>
            <li><a href="#home" className="hover:text-red-500">Top Trailers</a></li>
            <li><a href="#ContactUs" className="hover:text-red-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-4">Reach Me At</h4>
          <p className="text-gray-400">+91-9059060865</p>

          {/* Social Media */}
          <div className="mt-4 space-y-2">
            <div>
              <h5 className="text-lg font-bold mb-2">Instagram</h5>
              <a
                href="https://www.instagram.com/nithin_potharaju"
                className="text-gray-400 hover:text-red-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 mr-2 inline-block" />
                nithin_potharaju
              </a>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-2">IMDb</h5>
              <a
                href="https://m.imdb.com/name/nm15176920/"
                className="text-gray-400 hover:text-red-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/Logos/IMDB.png" // Replace with the correct path to your IMDb image
                  alt="IMDb"
                  className="inline-block"
                  style={{ width: '30px', height: '30px' }}
                />
                IMDb Profile
              </a>
            </div>
            <div>
              <h5 className="text-lg font-bold mb-2">My E-Mail</h5>
              <a
                href="mailto:nithinpotharaju9@gmail.com"
                className="text-gray-400 hover:text-red-500"
              >
                <Mail className="w-6 h-6 mr-2 inline-block" />
                nithinpotharaju9@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
      </div >
      );
}

export default App;