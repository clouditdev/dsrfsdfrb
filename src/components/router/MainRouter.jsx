import React from 'react'
import NewGames from '../Games/NewGames'
import Popular from '../Games/Popular'
import Carousel from '../Layout/Carousel'

const MainRouter = () => {
    return (
        <div className="flex w-full h-screen lg:h-full flex-col">
            <Carousel />
            <Popular />
            <NewGames />
        </div>
    )
}

export default MainRouter