import React from 'react'
import CarouselButton from '../UI/Carousel/CarouselButton'

const Carousel = () => {
    return (
        <div className="flex w-full justify-center">
            <div className="flex w-3/4 mt-10 md:mt-32 mb-10 justify-center rounded-lg shadow-xl">
                <div className="flex absolute w-3/4 flex-nowrap justify-between">
                    <div className="flex flex-col z-30">
                        <p className="z-40 font-extrabold mt-4 lg:mt-8 ml-16 text-xl lg:text-3xl text-[#F8526E] drop-shadow-md">
                            BONUS PACK
                        </p>
                        <p className="z-40 w-3/4 lg:w-96 mt-5 ml-16 text-sm lg:text-xl text-gray-400 drop-shadow-md">
                            До $1000 БОНУСОМ и 50 БЕСПЛАТНЫХ СПИНОВ на ваш первый депозит.
                        </p>
                        <div className="ml-16 z-40">
                            <CarouselButton />
                        </div>
                    </div>
                    <img draggable="false" className="flex h-40 lg:h-60 z-30 rounded-r-lg select-none pr-28 lg:pr-40 md:visible invisible absolute md:relative" src="/images/carousel/imgbin_online-gambling-online-casino-game-png.png" alt="" />
                </div>
                <div className="flex absolute h-40 lg:h-60 w-full justify-center">
                    <div className="flex bg-gradient-to-t z-20 from-[#f8526e59] via-[#f8526e28] to-[#f8526e00] w-3/4 h-40 lg:h-60 rounded-lg opacity-70" />
                </div>
                <img draggable="false" className="w-full h-40 lg:h-60 object-cover rounded-lg filter brightness-50 select-none z-10" src="/images/carousel/bg.webp" alt="" />
            </div>
            <div className="flex absolute h-60 lg:h-80 w-full md:mt-20 pt-3">
                <img draggable="false" className="select-none absolute z-30 h-40 lg:h-72 pt-5 invisible lg:visible" src="/images/carousel/girl2.png" alt="" />
                <div className="bg-[#242532] h-full w-full absolute z-10 opacity-90" />
                <img className="object-cover w-full z-0" src="/images/carousel/4564132189.jpg" alt="" />
            </div>
        </div>
    )
}

export default Carousel