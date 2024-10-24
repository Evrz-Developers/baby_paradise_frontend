import React from 'react'

const ContentWrapper = ({ children }) => {
    return (
        <div className='w-full max-w-limit m-auto'>
            {children}
        </div>
    )
}

export default ContentWrapper