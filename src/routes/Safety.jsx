import React from 'react'
import { Container } from '../components/atoms/Container'

export default function Safety(){ 
    return (
        <>
            <Container size="md">
                <div style={{
                        width:'320px', 
                        maxWidth:'100%'
                    }} 
                    className="flex flex-col gap-4">
                    <div className="mb-3 col-3">
                        <h1 className="text-3xl font-bold text-blue-800 mb-3">Thanks</h1>
                        <p className="text-gray-800">Check back frequently on our database to see if your vehicle has been spotted or recovered</p>
                    </div> 
                    <div className="mb-3">
                        <h2 className="text-xl font-bold text-blue-800 mb-2">Next Steps</h2>
                        <ul className="pl-3">
                            <li className="text-gray-800">Report vehicle as stolen with your local police department</li>
                            <li className="text-gray-800">Send report to your insurance company</li>
                            <li className="text-gray-800">Never approach a carjacker. You will get clipped</li>
                        </ul>
                    </div> 
                </div>
            </Container>
        </>
    )
}