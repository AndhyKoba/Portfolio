import React from 'react'
import Button from './Button.jsx'
import { TiLocationArrow } from 'react-icons/ti'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Hero = () => {
  return (
      useGSAP(() => {
        gsap.set('#hero', {
          clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)'
        })
        gsap.from('#hero', {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
            }
          });
        },),

    <div  className='relative min-h-dvh w-screen overflow-x-hidden grid place-content-center '>
        <Button id="button 2" title="Contactez-moi"leftIcon={<TiLocationArrow/>}
            containerClass="!bg-black !text-white gap-1 flex flex-center motion-preset-oscillate-sm motion-duration-1500" />
        <div className='absolute top-0 left-0 w-full h-full grid place-content-center bg-gradient-to-br from-black to-stone-700 ' id='hero'>
            <div className=" top-4 left-3 w-6 h-6 border border-white rounded-full absolute"></div>
            <div className="top-4 left-10 bg-white w-6 h-6 border border-white rounded-full absolute"></div>
            <div className=" top-4 right-8 w-6 h-6 border border-white rounded-full absolute"></div>
            <div className="top-4 right-15 bg-white w-6 h-6 border border-white rounded-full absolute"></div>

            <div className="flex gap-2 relative flex-col ">
                <div className="-mb-4 motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth">
                    <div className="w-6 h-6 absolute top-4 left-0 border border-white rounded-full"></div>
                    <div className="px-2 text-white font-raleway border border-white rounded-full absolute top-4 left-7">2025</div>
                </div>

                <div className="-mb-4 top-4 -right-3 absolute motion-translate-y-in-100 motion-duration-[2.5s] motion-ease-spring-smooth">
                    <div className="glass w-35 shadow-xl shadow-black h-15 border border-white rounded-full"></div>
                </div>
                <div className="-mb-4 bottom-8 -left-5 absolute motion-translate-y-in-100 motion-duration-[1s] motion-ease-spring-smooth">
                    <div className="glass w-55 shadow-xl shadow-black h-20 border border-white rounded-full"></div>
                </div>
                
                <div className="text-[10rem] font-raleway text-white motion-translate-y-in-100 motion-duration-[4s] motion-ease-spring-smooth">Portfolio</div>

                <div className="absolute right-0 bottom-6 flex gap-1 motion-translate-y-in-100 motion-duration-[3.5s] motion-ease-spring-smooth">
                    <div className="w-6 h-6 border border-white rounded-full"></div>
                    <div className=" bg-white rounded-full px-2 font-raleway-italic">Andhy Weslhey Koba</div>
                </div>

            </div>
            <Button id="button" title="Contactez-moi"leftIcon={<TiLocationArrow/>}
            containerClass="bg-white gap-1 flex flex-center motion-preset-oscillate-sm motion-duration-1500" />
            
        </div>
    </div>
  
  )
}

export default Hero