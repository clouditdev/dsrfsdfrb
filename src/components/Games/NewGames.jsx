import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const NewGames = () => {
    const games = [
        { id: 1, img: "/images/games/0fe9cf6d5c6ce32f0b10980bfacd4d57.png", name: "Queen of the Sun", provider: "Booongo" },
        { id: 2, img: "/images/games/0fe9cf6d5c6ce32f0b10980bfacd4d57.png", name: "", provider: "Booongo" },
        { id: 3, img: "/images/games/0fe9cf6d5c6ce32f0b10980bfacd4d57.png", name: "", provider: "Booongo" },
        { id: 4, img: "/images/games/0fe9cf6d5c6ce32f0b10980bfacd4d57.png", name: "", provider: "Booongo" },
    ]
    return (
        <div className="flex w-full justify-center">
            <div className="flex flex-col justify-center w-3/4">
                <p className="text-white text-xl font-semibold py-5">
                    НОВЫЕ ИГРЫ
                </p>
                <div className="flex flex-nowrap justify-center">
                    {games.map(game =>
                        <div key={game.id} className="flex flex-col mb-2 mr-2">
                            <Link to="">
                                <motion.div whileHover={{y: -5}} whileTap={{y: 2}}>
                                <img className="rounded-lg" src={game.img} alt="" />
                                </motion.div>
                            </Link>
                            <div className="flex flex-col">
                                <div className="flex">
                                    <Link to="">
                                        <p className="text-white hover:text-[#F8526E] transition-colors duration-300">
                                            {game.name}
                                        </p>
                                    </Link>
                                </div>
                                <div className="flex">
                                    <Link to="">
                                        <p className="text-gray-600 hover:text-gray-500 text-sm transition-colors duration-300">
                                            {game.provider}
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NewGames