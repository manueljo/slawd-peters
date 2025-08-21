import Image from "next/image"
import what from "../public/images/hero.jpg"

const WhatWeDo = () => {
    return(
        <section className='min-h-screen w-full max-w-[1440px] mx-auto px-4 py-8 flex items-center justify-around flex-col md:flex-row gap-10'>
            <div className="max-w-[500px]">
                <h2 className="text-3xl md:text-5xl font-bold">What We Do</h2>
                <p className="text-lg mt-4">
                    We specialize in a wide range of engineering services, including metal fabrication, welding, procurement, NDT, corrosion control, millwright and pipeline maintenance. In addition, we design and manufacture agro-based machines, install and service industrial equipment, and provide hands-on technical training through our accredited technical school. Whether you need machinery built, maintained, or skilled manpower trained — SLAWD PETERS Engineering delivers.
                </p>
            </div>
            <div>
                <Image src={what} className="max-w-[400px] rounded-2xl" alt='what we do'/>
            </div>
        </section>
    )
}

export default WhatWeDo