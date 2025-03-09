import React from 'react'
import Button from './Button'

const ButtonList = () => {

    const buttons = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking"]

    return (
        <div className='flex'>
            {
                buttons.map(button => <Button key={button} name={button} />)
            }    
        </div>
    )
}

export default ButtonList