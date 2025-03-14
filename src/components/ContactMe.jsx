import React from 'react';

const ContactMe = () => {
  return (
    <div id="contact" className="min-h-screen bg-stone-100 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-stone-800 mb-12 border-b border-stone-300 pb-4">Contactez Moi</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-4">Restons en Contact</h3>
              <p className="text-stone-600">
                N'hésitez pas à me contacter pour discuter de votre projet ou pour toute opportunité de collaboration.
                Je suis ouvert aux projets freelance et aux postes à temps plein.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-stone-800 text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-stone-800">Email</h4>
                  <p className="text-stone-600">andhyweslheykoba@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-stone-800 text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-stone-800">Téléphone</h4>
                  <p className="text-stone-600">+241 77899223/77059322</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-stone-800 text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-stone-800">Localisation</h4>
                  <p className="text-stone-600">Libreville, Gabon</p>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="bg-white p-8 rounded-tl-3xl rounded-br-3xl shadow-lg">
            <div className="text-center py-12">
              <p className="text-stone-600">Je vous répondrai dès que possible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;