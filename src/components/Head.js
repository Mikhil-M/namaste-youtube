import React from 'react'

const Head = () => {
    return (
        <div className='grid grid-flow-col py-4 px-6 shadow-lg'>
            <div className='flex col-span-1'>
                <img 
                    className='h-8'
                    alt='hamburger' 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png'
                />
                <img 
                    className='h-8 pl-3'
                    alt='youtube'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'
                />
            </div>
            <div className='col-span-10 text-center mr-11'>
                <input className='p-2 w-1/2 border border-gray-400 rounded-l-full' type='text' placeholder='Search'/>
                <button className='p-2 border border-gray-400 rounded-r-full'>Search</button>
            </div>
            <div className='col-span-1 flex justify-end'>
                <img 
                    className='h-8'
                    alt='user'
                    src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                />
            </div>
        </div>
    )
}

export default Head