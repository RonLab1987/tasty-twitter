import React from 'react'
import './container.sass'

export const Container: React.FC = ({ children }) => {
    return (
        <div className='container'>
            { children }
        </div>
    )
}
