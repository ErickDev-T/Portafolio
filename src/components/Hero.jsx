import { ArrowRight, Play } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-900 pt-20 relative overflow-hidden"
  >
      {/* animation background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div> {/* bola verde */}
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>{/* bola azul  */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>{/* gradiante en toda la pantall */}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center"></div>
        {/* left content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className={`text-green-400 font-semibold text-lg transition-all duration-1000`}>
              Get Ready to start work 
            </p>
            <h1 className={`text-5xl md:text-7xl font-black text-white leading-tight transition-all duration-1000 delay-200`}>I'm    {/* transicin suave cambio de size */}

              <span className="text-green-400"> Developer</span> <br />
              <span className="text-white">Erick Tejada</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg transition-all duration-1000 delay-400">
                loren input loren inputloren inputloren inputloren inputloren inputloren inputloren inputloren inputloren inputoren inputloren inpuoren inputloren inpu
              </p>
                <div className="flex flex-wrap gap-4 transition-all duration-1000 delay-600">
                  <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl font-medium hover:scale-105">
                  Learn More
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1"/>
                </button>
                <button className="border-2 border-slate-600 text-white px-8 py-4 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium flex items-center gap-2 group hover:scale-105">
                  <Play className="w-5 h-5" /> Play Video
                </button>
                </div>
                

          </div>


        </div>
        {/* right background */}
      </div>
    </section>
  );
}

export default Hero;
