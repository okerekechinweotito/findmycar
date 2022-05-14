import React from 'react'

export const Input = props => {
    return (
        <>
            <input 
                type={props.type}
                placeholder={props.placeholder}  
                className={`px-6 py-3 m-0  ${props.classes}`}
                onChange={props.handleChange}
                required={props.required} 
                multiple={props.multiple}
            />
        </>
    )
}