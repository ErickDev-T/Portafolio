import React, { useEffect, useState } from "react";
import photo from "../assets/photo.jpeg";

function About() {

  const [isVisible, SetIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio) {
          SetIsVisible(true);
        }
      },
      { threshold: 0.9 }
    );
    const element = document.getElementById("about");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [])

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden min-h-screen">
      {/* fondos animados */}
      <div className="absolute inset-0">
        {/* bola verde flotando lento */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-xl animate-bounce"></div>

        {/* bola azul con pulso lento */}
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-xl animate-pulse"></div>

        {/* degradados suaves */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-600/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-4 min-h-100vh">
        <div className="container px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-space">
            {/*image left*/}
            <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translatex-0" : "opacity-0 -translate-x-10"}`}>
              <div className="relative group">
                <div className="w-full max-w-md mx-auto">
                  <div className="relative border-4 border-green-500 rounded-2xl p-2 group-hover:border-green-400 transition-all duration-300">
                    <img src={photo} className="w-full rounded-xl transition-all duration-500 group-hover:scale-105" />
                    <div className="absolute inset-2 bg-gradient-to-tr from-green-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Floating Decoration */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-red-600/20 rounded-full"></div>

                    <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-600/20 rounded-full"></div>

                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translatex-0" : "opacity-0 -translate-x-10"}`}>
              <div className="space-y-3">
                <p className="text-green-400 font-semibold text-lg">About M</p>
                <h2 className="text-4xl md:text-5xl text-white font-bold animate-slide-up">
                  Why hire me for your <br />
                  <span>next project?</span>
                </h2>
                <p className="text-green-400 font-semibold delay-200">
                  UI / UX Designer & Web Developer
                </p>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed mb-2">
                <p className="text-lg transition-all duration-100 delay-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deserunt
                  doloremque totam architecto alias nihil sapiente blanditiis non vero
                  aliquid possimus, eos consequatur voluptate deleniti corporis itaque
                  explicabo cum sunt quos, distinctio voluptate neque sequi.
                </p>


                <p className="transition-all duration-100 delay-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deserunt
                  doloremque totam architecto alias nihil sapiente blanditiis non vero
                  aliquid possimus, eos consequatur voluptate delei.
                </p>
              </div>
              <div className={`grid grid-cols-2 gap-6 py-6 transition-all duration-1000 delay-500`}>
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">Name</p>
                  <p className="text-gray-300">Erick Tejada</p>
                </div>
                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transsition-all duration-300"> Location</p>
                  <p className="text-gray-300">Dominican republic</p>

                </div>

                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transsition-all duration-300"> Birthday: </p>
                  <p className="text-gray-300">07 september, 2004</p>

                </div>

                <div className="group">
                  <p className="text-white font-semibold group-hover:text-green-400 transsition-all duration-300"> Email: </p>
                  <p className="text-gray-300">erickjtmdev@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 transition-all duration-1000 delay-1100">
                <button className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">Download</button>

                <button className="border-2 border-slate-600 text-white px-8 py-3 rounded-xl hover:border-green-600 hover:text-400 transition-all duration-300 font-medium hover:scale-105">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
