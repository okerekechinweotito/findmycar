import React from 'react'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'

export const LoginForm = props => {
    return (
        <>
             <form className="flex gap-2 flex-col mb-3"  onSubmit={props.handleLogin}>
                <Input type="email" placeholder="Email" classes="border-gray-900 bg-gray-100 w-full" />
                <Input type="password" placeholder="Password" classes="border-gray-900 bg-gray-100 w-full" />
                <Button type="submit" text="Login" classes="bg-green-300 text-gray-900" />
            </form> 
            <p className="text-gray-600 text-sm text-center">Don't have an account? <a href="/">Sign up instead!</a></p>
        </>
    )
}