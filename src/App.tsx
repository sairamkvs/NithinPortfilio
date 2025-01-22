import React from 'react';
import { Camera, Play, Film, Mail, Instagram, Linkedin } from 'lucide-react';


function App() {
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
            src="assets/video/Showreel.mp4" // Replace with the actual path to your video file
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
      <section id="bio" className="py-20 bg-[#1a1d24] text-center md:text-left">
        <div className="container mx-auto px-4 md:flex md:items-center">
          <div className="md:w-1/2">
            <img
              src="assets/Images/NITHIN.png" // Replace with the actual path to your image
              alt="Nithin Potharaju"
              className="w-full h-auto aspect-square object-cover rounded-lg mb-8 md:mb-0"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">BIO</h2>
            <p className="text-gray-400">
              I’m Nithin Potharaju, a cinematographer and colorist passionate about storytelling through visuals. My journey in the film and television industry has allowed me to work on a diverse range of projects, where I strive to bring a unique aesthetic and creative vision to each endeavor.
              I have had the privilege of collaborating on films like "Pottel," "AAY" and "Maa Nanna Superhero," where I focus on crafting atmospheric moods and visual narratives that resonate with audiences.
              I believe that the magic of filmmaking lies in the details, and I am always eager to experiment with innovative techniques and modern technologies to enhance the storytelling experience.
              When I’m not behind the camera, you can find me exploring new narratives or diving into the world of color grading – always looking for ways to push the boundaries of visual art.
            </p>
          </div>
        </div>
      </section>


      {/* Main Stream Movies Section */}
      <section id="Films" className="py-20 bg-[#1a1d24]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Movies</h2>
          <p className="text-gray-400 mb-12">Feature Films & Major Productions</p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                title: "POTTEL",
                role: "Associate cinematographer",
                image: "assets/Images/pottel_movie_poster.png"
              },
              {
                title: "AAY",
                role: "Assistant Cinematographer",
                image: "assets/Images/aay_movie_poster.jpg",
              },
              {
                title: "MAA NAANA SUPER HERO",
                role: "Assistant Cinematographer",
                image: "assets/Images/ma_naana_superhero_poster.jpg",
              },
              {
                title: "Shapadham",
                role: "Associate Cinematographer",
                image: "assets/Images/Vyuham_film_poster.jpg",
              },
              {
                title: "Yathbhava",
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
      </section>

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

      {/* Short Films Section */}
      <section className="py-20 bg-[#1a1d24]">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold mb-16">Short Films</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
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
                description: "Shortfall- Colorist",
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

      {/* YouTube Link Section */}
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
            className="text-lg text-red-500 hover:underline"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security feature to prevent malicious activities
          >
            Watch My Showreel on YouTube
          </a>
        </div>
      </section>


      {/* Brand Logos Section https://www.youtube.com/embed/MBvsVObj2v0*/}
      <section id="Brands" className="py-20">
        <div className="container mx-auto px-0">
          <h2 className="text-4xl font-bold text-center mb-16">Brands Worked With</h2>
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
      <footer id="ContactUs" className="bg-[#1a1d24] py-20">
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
                 {/* <li><a href="#" className="hover:text-red-500">Film News</a></li> 
                 <li><a href="#" className="hover:text-red-500">Coming Soon</a></li>*/}
                <li><a href="#Films" className="hover:text-red-500">Most Popular</a></li>
                <li><a href="#home" className="hover:text-red-500">Top Trailers</a></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Additional Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#bio" className="hover:text-red-500">About</a></li>
                <li><a href="#" className="hover:text-red-500">Gallery</a></li>
                 {/* <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li> */}
                <li><a href="#ContactUs" className="hover:text-red-500">Contact</a></li>
              </ul>
            </div>



            {/*<h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Newsletter sign up"
                  className="bg-gray-800 px-4 py-2 rounded-l-lg focus:outline-none"
                />
                <button className="bg-red-500 px-4 py-2 rounded-r-lg hover:bg-red-600">
                  Subscribe
                </button>
              </div>*/}
            {/* Newsletter */}
            <div>

              {/* Mobile Number Section */}
              <h5 className="text-lg font-bold mt-6 mb-2">Reach me At</h5>
              <p className="text-gray-400">
                +91-9059060865 {/* Replace with your actual mobile number */}
              </p>
              {/* Instagram Section */}
              <h5 className="text-lg font-bold mb-2">Instagram</h5>
              <a
                href="https://www.instagram.com/nithin_potharaju"
                className="text-gray-400 hover:text-red-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 mr-2 inline-block mx-5" />
                nithin_potharaju
              </a>

              {/* IMDb Section */}
              <h5 className="text-lg font-bold mt-6 mb-2">IMDb</h5>
              <a
                href="https://m.imdb.com/name/nm15176920/"
                className="text-gray-400 hover:text-red-500"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img
                src="/assets/Logos/IMDB.png" // Replace with the correct path to your IMDb image
                alt="IMDb"
                className="inline-block" // Adjusted class name
                  style={{ width: '70px', height: '70px' }} // Adjust dimensions as needed
              />
              IMDb Profile
              </a>

              {/* Email Section */}
              <h5 className="text-lg font-bold mt-6 mb-2">My E-Mail</h5>
              <a
                href="mailto:nithinpotharaju9@gmail.com"
                className="text-gray-400 hover:text-red-500"
              >
                <Mail className="w-6 h-6 mr-2 inline-block mx-5" />
                nithinpotharaju9@gmail.com
              </a>


            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;