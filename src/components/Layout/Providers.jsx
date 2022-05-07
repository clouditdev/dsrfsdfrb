import React from 'react'

const Providers = () => {
    const providers = [
        { id: "1", img: "/images/providers/provider (1).svg" },
        { id: "2", img: "/images/providers/provider (2).svg" },
        { id: "3", img: "/images/providers/provider (3).svg" },
        { id: "4", img: "/images/providers/provider (4).svg" },
        { id: "5", img: "/images/providers/provider (5).svg" },
        { id: "6", img: "/images/providers/provider (6).svg" },
        { id: "7", img: "/images/providers/provider (7).svg" },
        { id: "8", img: "/images/providers/provider (8).svg" },
        { id: "9", img: "/images/providers/provider (9).svg" },
        { id: "10", img: "/images/providers/provider (10).svg" },
        { id: "11", img: "/images/providers/provider (11).svg" },
        { id: "12", img: "/images/providers/provider (12).svg" },
        { id: "13", img: "/images/providers/provider (13).svg" },
        { id: "14", img: "/images/providers/provider (14).svg" },
        { id: "15", img: "/images/providers/provider (15).svg" },
        { id: "16", img: "/images/providers/provider (16).svg" },
        { id: "17", img: "/images/providers/provider (17).svg" },
        { id: "18", img: "/images/providers/provider (18).svg" },
        { id: "19", img: "/images/providers/provider (19).svg" },
        { id: "2", img: "/images/providers/provider (20).svg" },
        { id: "21", img: "/images/providers/provider (21).svg" },
        { id: "22", img: "/images/providers/provider (22).svg" },
        { id: "23", img: "/images/providers/provider (23).svg" },
        { id: "24", img: "/images/providers/provider (24).svg" },
        { id: "25", img: "/images/providers/provider (25).svg" },
        { id: "26", img: "/images/providers/provider (26).svg" },
        { id: "27", img: "/images/providers/provider (27).svg" },
        { id: "28", img: "/images/providers/provider (28).svg" },
        { id: "29", img: "/images/providers/provider (29).svg" },
    ]

    return (
        <div className="flex flex-wrap w-full bg-[#1F202C] px-10 py-5 justify-center">
            { providers.map(provider =>
                <img draggable="false" className="select-none h-5 mx-4 my-4 filter grayscale hover:filter-none transition-all duration-300 cursor-pointer" src={provider.img} alt="" key={provider.id} />
                )}
        </div>
    )
}

export default Providers