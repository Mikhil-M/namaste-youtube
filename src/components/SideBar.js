import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if(!isMenuOpen) return null;
    return (
        <div className='p-4 w-48 shadow-lg'>
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscriptions</li>
            </ul>
            <h1 className='font-bold pt-4'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className='font-bold pt-4'>Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default SideBar