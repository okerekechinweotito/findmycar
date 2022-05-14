import React from 'react'
import ReportForm from '../components/ReportForm'
import { Container } from '../components/atoms/Container'

export default function Report(){ 
    return (
        <>
            <Container size="md">
                <h1 className="text-center mb-5">Report a stolen Vehicle</h1>
                <ReportForm />
            </Container>
        </>
    )
}