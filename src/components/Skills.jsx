import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
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
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap 16">
          {/*left edutacion*/}
          <div className="{`transaction-all duration-1000`}">
            <div className="mb-12">
              <p className="text-green-400 font-semibold text-lg mv-4">Qualification</p>
              <p className="text-green-400 text-4xl font-bold">edutacion</p>
            </div>
            <div className="spacey-8"> {/*loic*/}</div>
          </div>
          <div className="transaction-all duration-1000 delay-300">

            <div className="mb-12">
              <p className="text-green-400 font-semibold text-lg mv-4">Expert</p>
              <p className="text-4xl font-black text-white mb-8">My skills</p>
            </div>
          </div>

        </div>


      </div>




    </section>
  );
}

export default Skills;