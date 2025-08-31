import { ArrowRight, Github, InstagramIcon, Linkedin, Mail, Play } from "lucide-react";
import React, { useEffect, useState } from "react";
import photo from "../assets/photo.jpeg";


function Hero() {
  const [isVisible, SetIsVisible] = useState(false);

  useEffect(() => {
    SetIsVisible(true);
  }, []);
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-900 pt-20 relative overflow-hidden"
    >
      {/* animation background */}
      <div className="absolute inset-0">
        {/* bola verde flotando lento */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-xl animate-[bounce_5s_ease-in-out_infinite]"></div>

        {/* bola azul con pulso lento */}
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-xl animate-[pulse_5s_ease-in-out_infinite]"></div>
        {/*fondo suave*/}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-600/9 to-transparent "></div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/9 to-transparent "></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className={`text-green-400 font-semibold text-lg transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                Get Ready to start work
              </p>
              <h1 className={`text-5xl md:text-7xl font-black text-white leading-tight transition-all duration-2000 delay-200  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>I'm    {/* transicin suave cambio de size */}

                <span className="text-green-400"> Developer</span> <br />
                <span className="text-white">Erick Tejada</span>
              </h1>
              <p className={`text-gray-300 text-lg leading-relaxed max-w-lg transition-all duration-2000 delay-400  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                Hi! I'm Erick, a tech enthusiast who loves learning, building projects, and solving problems through technology. Always curious and excited to keep growing.              </p>
              <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-600  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-3000 flex items-center gap-2 group shadow-lg hover:shadow-xl font-medium hover:scale-105">
                  Learn More
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="border-2 border-slate-600 text-white px-8 py-4 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium flex items-center gap-2 group hover:scale-105">
                  <Play className="w-5 h-5" /> Play Videoo
                </button>
              </div>
              {/*iconos redes sociales*/}
              <div className={`flex gap-4 pt-6 transition-all duration-3000 delay-800  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <a href="#"
                  className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-3000 group hover:scale-110 hover:rotate-6"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a href="#"
                  className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-3000 group hover:scale-110 hover:rotate-6">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#"
                  className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-3000 group hover:scale-110 hover:rotate-6">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#"
                  className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-3000 group hover:scale-110 hover:rotate-6"
                >
                  <InstagramIcon className="w-5 h-4" />
                </a>
              </div>
            </div>
          </div>
          {/* right background */}
          <div className={`relative transition-all duration-2000 delay-300  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative">
              <div className="w-full max-w-lg mx-auto">
                <div className="relative group">
                  <img src={photo} className="w-full rounded-2xl transition-all duration-500 group-hover:scale-105"></img>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-600 rounded-3xl opacity-20 hover:rotate-6"></div>
              <div className="absolute -left-4 -button-4 w-20 h-20 bg-blue-600 rounded-full opacity-20 hover:bg-blue-50"></div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
