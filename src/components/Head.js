import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const dispatch = useDispatch()
    const searchResults = useSelector(store => store?.search)

    useEffect(() => {
        const timer = setTimeout(() => {
            searchResults?.[searchQuery] ? setSuggestions(searchResults[searchQuery]) : getSearchSuggestions();          
        }, 200);

        return () => clearTimeout(timer); 
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const data = await res.json();
        setSuggestions(data?.[1] || []);
        dispatch(cacheResults({ [searchQuery]: data?.[1] || [] }));
    }

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
            <div className='col-span-10 pl-[20%] mr-11'>
                <div>
                    <input className='p-2 px-4 w-1/2 border border-gray-400 rounded-l-full' type='text' placeholder='Search'
                        value={searchQuery} 
                        onChange={(e) => setSearchQuery(e?.target?.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className='p-2 border border-gray-400 rounded-r-full bg-gray-100'>Search</button>
                </div>
                { showSuggestions && <div className='absolute bg-white shadow-lg rounded-lg text-left w-[26%]'>
                    <ul>
                        { suggestions?.map(suggestion => <li key={suggestion} className='px-5 py-2 hover:bg-gray-100'>{suggestion}</li>)}
                    </ul>
                </div>}        
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