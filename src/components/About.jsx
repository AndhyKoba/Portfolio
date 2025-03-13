import React from 'react';

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-stone-100 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-1">
            <div className="bg-stone-800 text-white p-6 rounded-tl-3xl rounded-br-3xl h-full">
              <h1 className="text-2xl font-bold mb-2">KOBA ANDHY WESLHEY</h1>
              <div className="flex flex-wrap gap-2 my-3">
                <span className="text-xs px-3 py-1 bg-stone-700 rounded-full">Développeur Web</span>
                <span className="text-xs px-3 py-1 bg-stone-700 rounded-full">Développeur Mobile</span>
                <span className="text-xs px-3 py-1 bg-stone-700 rounded-full">Designer UI/UX</span>
              </div>
              
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-3 section-title">À PROPOS DE MOI</h2>
                <p className="text-stone-300 text-sm">
                  Bonjour, je suis un développeur web passionné par la création d'applications modernes et intuitives. Mon objectif est de concevoir des solutions numériques qui allient esthétique et fonctionnalité.
                </p>
              </div>
              
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-3 section-title">COMPÉTENCES PERSONNELLES</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-item text-xs px-2 py-1 border border-stone-400 rounded-full">Typographie</span>
                  <span className="skill-item text-xs px-2 py-1 border border-stone-400 rounded-full">Créativité</span>
                  <span className="skill-item text-xs px-2 py-1 border border-stone-400 rounded-full">Rigoureux</span>
                  <span className="skill-item text-xs px-2 py-1 border border-stone-400 rounded-full">Gestion du temps</span>
                  <span className="skill-item text-xs px-2 py-1 border border-stone-400 rounded-full">Mise en page</span>
                  <span className="skill-item text-xs px-2 py-1 border border-stone-400 rounded-full">Travail d'équipe</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Middle Column */}
          <div className="col-span-1">
            <div className="bg-stone-50 p-6 rounded-tr-3xl h-full">
              <h2 className="text-xl font-bold mb-4 text-stone-800 section-title">FORMATION</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="px-2 text-stone-800 font-medium border border-stone-800 rounded-full w-fit text-sm">2022-2024</h3>
                  <p className="mt-2 text-sm">INPTIC, Libreville, Diplôme de Technicien Supérieur (DTS) en Génie informatique option développement d’applications réparties</p>
                </li>
                <li>
                  <h3 className="px-2 text-stone-800 font-medium border border-stone-800 rounded-full w-fit text-sm">2019-2022</h3>
                  <p className="mt-2 text-sm">Collège et Lycée Raponda
                  Walker, Port-Gentil, Baccalauréat général série C</p>
                </li>
                <li>
                  <h3 className="px-2 text-stone-800 font-medium border border-stone-800 rounded-full w-fit text-sm">2017-2019</h3>
                  <p className="mt-2 text-sm">Collège et Lycée Raponda Walker, Port-Gentil Brevet d'Études du Premier Cycle</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="col-span-1">
            <div className="bg-stone-200 p-6 rounded-bl-3xl h-full">
              <h2 className="text-xl font-bold mb-4 text-stone-800 section-title">COMPÉTENCES TECHNIQUES</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-stone-700">Front-end</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>HTML/CSS</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-stone-300 h-1.5 rounded-full mt-1">
                      <div className="bg-stone-800 h-1.5 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>JavaScript</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-stone-300 h-1.5 rounded-full mt-1">
                      <div className="bg-stone-800 h-1.5 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>React</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-stone-300 h-1.5 rounded-full mt-1">
                      <div className="bg-stone-800 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-stone-700">Back-end</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Node.js</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-stone-300 h-1.5 rounded-full mt-1">
                      <div className="bg-stone-800 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>MongoDB</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-stone-300 h-1.5 rounded-full mt-1">
                      <div className="bg-stone-800 h-1.5 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>MySQL</span>
                      <span>80%</span>
                    </div>
                    <div className="w-full bg-stone-300 h-1.5 rounded-full mt-1">
                      <div className="bg-stone-800 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-3 text-stone-700">Outils de Design</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-stone-100 p-2 rounded-lg text-center">
                    <span className="text-xs font-medium">Figma</span>
                    <div className="w-10 h-10 mx-auto mt-1 rounded-full bg-stone-800 flex items-center justify-center text-white text-xs">85%</div>
                  </div>
                  <div className="bg-stone-100 p-2 rounded-lg text-center">
                    <span className="text-xs font-medium">Adobe XD</span>
                    <div className="w-10 h-10 mx-auto mt-1 rounded-full bg-stone-800 flex items-center justify-center text-white text-xs">80%</div>
                  </div>
                  <div className="bg-stone-100 p-2 rounded-lg text-center">
                    <span className="text-xs font-medium">Photoshop</span>
                    <div className="w-10 h-10 mx-auto mt-1 rounded-full bg-stone-800 flex items-center justify-center text-white text-xs">75%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;