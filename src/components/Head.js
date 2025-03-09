import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Head = () => {
    const dispatch = useDispatch()

    const toggleEventHandler = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className='grid grid-flow-col py-4 px-6 shadow-lg'>
            <div className='flex col-span-1 pt-1'>
                <img 
                    onClick={() => toggleEventHandler()}
                    className='h-8 cursor-pointer'
                    alt='hamburger' 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png'
                />
                <img 
                    className='h-8 pl-3'
                    alt='youtube'
                    src='https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg'
                />
            </div>
            <div className='col-span-10 text-center mr-11'>
                <input className='p-2 w-1/2 border border-gray-400 rounded-l-full' type='text' placeholder='Search'/>
                <button className='p-2 border border-gray-400 rounded-r-full bg-gray-100'>Search</button>
            </div>
            <div className='col-span-1 flex justify-end pt-1'>
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