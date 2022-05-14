import React from 'react'

export const Card = props => {
    return (
        <>
            <div className="card shadow-lg m-3">
                {   
                    props.img  ? 
                    <div className="mb-3">
                        <img style={{
                            height:'150px', 
                            width:'100%', 
                            objectFit:'cover',
                            
                            }}
                            src={props.img}
                            alt="" 
                        />
                    </div> : null
                }
                <div className="px-10 mb-2">
                    <div className="flex justify-between w-full mb-2">
                        <div>
                            <div className="text-gray-300 text-sm">make</div>
                            <p className="make text-blue-800 font-bold text-2xl">{props.make}</p>
                        </div>
                        <div>
                            <div className="text-gray-300 text-sm">model</div>
                            <p className="make text-blue-800 font-bold text-lg">{props.model}</p>
                        </div>
                    </div>
                    <div className="flex justify-between w-full mb-10">
                        <div>
                            <div className="text-gray-300 text-sm">license</div>
                            <p className="make text-blue-800 font-bold text">{props.license}</p>
                        </div>
                        <div>
                            <div className="text-gray-300 text-sm">color</div>
                            <p className="make text-blue-800 font-bold">{props.color}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between w-full bg-blue-900 px-10 py-4">
                    <div>
                        <div className="text-gray-400 text-sm">last seen</div>
                        <p className="make text-gray-200 font-bold">{props.location}</p>
                    </div>
                    <div>
                        <div className="text-gray-400 text-sm text-right">date reported</div>
                        <p className="text-right text-gray-200 font-bold">{ props.date ? props.date : "No Date"}</p>
                    </div>
                </div>
            </div>
        </>
    )
}