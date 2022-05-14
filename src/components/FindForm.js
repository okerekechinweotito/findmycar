import React, {useState} from 'react'
import { Input } from '../components/atoms/Input'
import { Button } from '../components/atoms/Button'

export default function FindForm(){
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [license, setLicense] = useState("")
    const [VIN, setVIN] = useState("")
    
    const handleChangeMake = e => setMake(e.target.value)
    const handleChangeModel = e => setModel(e.target.value) 
    const handleChangeLicense = e => setLicense(e.target.value) 
    const handleChangeVIN = e => setVIN(e.target.value) 
    
    const handleSubmit = () => console.log(make, model, license, VIN) 

    return (
        <>
            <form  onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                    <div className="grid grid-cols-2 gap-3">
                        <Input placeholder="Make" handleChange={handleChangeMake} required="required" />
                        <Input placeholder="Model" handleChange={handleChangeModel} required="required" />
                        <Input placeholder="License" handleChange={handleChangeLicense} required="required" />
                        <Input placeholder="VIN" handleChange={handleChangeVIN} required="required" />
                    </div>
                    <div className="grid grid-cols-1">
                        <Button classes="bg-green-300 w-full col-12 text-gray-900 font-bold" type="submit" text="Submit" />
                    </div>
                </div>
            </form>
        </>
    )
}