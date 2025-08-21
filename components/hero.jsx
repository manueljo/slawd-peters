import React from 'react'
import { CardSwipe } from './ui/card-swipe'

const Hero = () => {
    const images = [
    { src: "/images/hero.jpg", alt: "Image 1" },
    { src: "/images/hero.jpg", alt: "Image 2" },
    { src: "/images/hero.jpg", alt: "Image 3" },
    { src: "/images/hero.jpg", alt: "Image 4" },
    { src: "/images/hero.jpg", alt: "Image 5" },
    { src: "/images/hero.jpg", alt: "Image 6" },
  ]

  return (
    <section className='min-h-screen w-full max-w-[1440px] mx-auto px-4 py-8 flex items-center justify-around flex-col md:flex-row'>
        <div className='max-w-[500px] lg:max-w-[700px] my-20'>
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold md:mb-10 mb-5'>Building Machines, Building Men.</h1>
            <p className='text-lg md:text-3xl lg:text-4xl text-red-800'>Precision Engineering. Practical Training. 50+ Years of Excellence.</p>
        </div>
        <div>
            <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
        </div>
    </section>
  )
}

export default Hero