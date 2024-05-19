import React from 'react'

export const PosterContainerSmall = ({ movie }) => {
    return (
        <div id="gridCol"
            className="relative lg:my-5 lg:ml-5 lg:rounded-md w-full min-w-full sm:min-w-0 lg:max-w-28 lg:min-h-40 ring-1 ring-gray-900/5 ring-inset">
            <div class="bg-white lg:rounded-md aspect-w-2 active:aspect-w-2 aspect-h-1 h-full active:aspect-h-3 transition-all overflow-clip">
                <img src={movie.image} alt="poster" class="w-full h-full select-none object-center object-cover" />
            </div>
            <svg className='right-2 bottom-2 z-10 absolute lg:hidden peer-active:hidden w-5 hover:w-6 h-5 hover:h-6 transition-all duration-700 peer/arrow stroke-nbgreylight hover:stroke-nbgreenmain' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
            </svg>
        </div>
    )
}

export const PosterContainer = ({ movie }) => {
    return (
        <div id="gridCol"
            className="relative lg:my-5 lg:ml-5 w-full min-w-full sm:min-w-0 lg:max-w-[35%] ring-1 ring-gray-900/5 ring-inset">
            <div class="bg-white lg:rounded-md aspect-w-2 active:aspect-w-2 aspect-h-1 h-full active:aspect-h-3 transition-all overflow-clip">
                <img src={movie.image} alt="poster" class="w-full h-full select-none object-center object-cover" />
            </div>
            <svg className='right-2 bottom-2 z-10 absolute peer-active:hidden w-5 hover:w-6 h-5 hover:h-6 transition-all duration-700 peer/arrow stroke-nbgreylight hover:stroke-nbgreenmain' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
            </svg>
        </div>
    )
}

export default PosterContainer
