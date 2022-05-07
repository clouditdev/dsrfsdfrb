import React from 'react'

export const Games = ({demo, title}) => {
    return (
        <div className="flex w-full flex-col justify-center mt-28">
            <div className="flex w-full justify-center">
                <iframe height="360" width="640" title={title} src={demo} allowfullscreen webkitallowfullscreen allow="autoplay" frameborder="0"></iframe>
            </div>
        </div>
    )
}
