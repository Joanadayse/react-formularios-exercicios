import { useState } from "react"

export default function useForm (inicialState){
    const [form, setForm]= useState(inicialState)

    const onChange=(event)=>{
        const {name,value}= event.target
        setForm({...form,[name]:value})
    }
    return [form , onChange]
}