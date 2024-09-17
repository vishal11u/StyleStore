import React from 'react'
import Mobile from '../../assets/background/banner-1.png'
import SmarWatch from '../../assets/background/banner-2.png'
import Ps5 from '../../assets/background/banner-3.png'

const Hero = () => {
  return (
    <>
      <section id='home' className="text-gray-600 body-font pb-2 md:pb-4">
        <div className="container px-2 md:py-5 md:px-32 pt-2 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  loading='lazy'
                  alt="gallery"
                  className="w-full object-cover h-full object-center block transition-all hover:scale-[1.05]"
                  src={Ps5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  loading='lazy'
                  alt="gallery"
                  className="w-full object-cover h-full object-center block transition-all hover:scale-[1.05]"
                  src={SmarWatch}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  loading='lazy'
                  alt="gallery"
                  className="w-full h-full object-cover object-center block transition-all hover:scale-[1.02]"
                  src={Mobile}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  loading='lazy'
                  alt="gallery"
                  className="w-full h-full object-cover object-center block transition-all hover:scale-[1.02]"
                  src={Mobile}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  loading='lazy'
                  alt="gallery"
                  className="w-full object-cover h-full object-center block transition-all hover:scale-[1.05]"
                  src={SmarWatch}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2 ">
                <img
                  loading='lazy'
                  alt="gallery"
                  className="w-full object-cover h-full object-center block transition-all hover:scale-[1.05]"
                  src={Ps5}
                />
              </div>
            </div>
          </div>
        </div>
      </section><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
    </>
  )
}

export default Hero