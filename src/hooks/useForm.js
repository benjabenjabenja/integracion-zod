import { useState } from "react"

const useForm = ({initialState, extraValidations = ({inputName, value, form, setForm, setIsValid}) => {}}) => {
    const [form, setForm] = useState(initialState)
    const [isValid, setIsValid] = useState(false)

    // console.log({INITIAL_STATE: initialState})

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const validateInputs = ({inputName, value, name}) => {
        if(form[inputName]?.isRequired && value?.length === 0) {
            console.log({inputName, value, name})
            setForm({...form, [inputName]: {
                ...form[inputName], 
                error: true, 
                errorMessages: [
                    ...form[inputName]?.errorMessages, 
                    `Field ${name} is required`]
            }})
            setIsValid(false)
        } else {

            setForm({...form, [inputName]: {
                ...form[inputName],
                value: value,
                error: false, 
                errorMessages: []
            }})
            setIsValid(true)
        }

        extraValidations && extraValidations({ inputName, value, form, setForm, setIsValid })

    }

    return {
        form, 
        setForm,
        handleChange,
        validateInputs,
        isValid
    }
}

export default useForm
