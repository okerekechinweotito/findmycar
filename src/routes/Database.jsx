import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Card } from '../components/atoms/Card'

export default function Database(){
    const [vehicles, setVehicles] = useState([])
    const vehiclesRef = collection(db, 'vehicles')

    const { user, loading, logout } = {
        user:true,
        loading:false, 
        logout:() => {}
    };

    useEffect(() => {
        let isMounted = true 

        const getVehicles = async () => {
        const data = await getDocs(vehiclesRef)

        setVehicles(data.docs.map( doc => (
                        {
                            ...doc.data(), 
                            id:doc.id 
                        }
                    )
                )
            )
       }

       getVehicles()

       return () => { isMounted = false }
    },[])

 
    return (
        <>
            <div className="sm:container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-10">
                {vehicles.map((vehicle, i) => {
                    console.log(vehicle)
                    return ( 
                        <Card 
                            key={i}
                            img={vehicle.img}
                            make={vehicle.make ? vehicle.make : 'Null'}  
                            model={vehicle.model ? vehicle.model : 'Null' } 
                            color={vehicle.color ? vehicle.color : 'Null' }  
                            license={vehicle.license ? vehicle.license : 'Null' } 
                            location={vehicle.location ? vehicle.location : 'Null' } 
                        />
                    ) 
                })}
            </div>
        </>
    )
}