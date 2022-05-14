import React from 'react'

export const Container = props => {
    return (
        <>
            <div 
                style={{padding:props.padding}}
                className={`container sm:container mx-auto flex gap-10 flex-col px-10`}
            >
            {props.children}
            </div>
        </>
    )
}