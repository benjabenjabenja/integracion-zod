import React, { useCallback, useState } from 'react'
//Componets:
import InputField from '../../componets/InputField/InputField'
//Router:
import { useNavigate } from 'react-router-dom'
//Utils:
import { REGISTER_FORM, STYLES } from '../../utils/const'
//Styles:
import './Register.css'

export const Register = () => {
    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputUsername, setInputUsername] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [inputConfirmPassword, setInputConfirmPassword] = useState("")

    const navigate = useNavigate()

    const isDiabled = useCallback(() => {
        return (
            inputName.length === 0 || 
            inputUsername.length === 0 || 
            inputEmail.length === 0 || 
            inputPassword.length === 0 ||
            inputConfirmPassword.length === 0
        )
    }, [inputName, inputUsername, inputEmail, inputPassword, inputConfirmPassword])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({inputName, inputUsername, inputEmail, inputPassword, inputConfirmPassword})

        navigate('/login')
    }

    return (
        <div>
            <h1>{REGISTER_FORM.FORM_TITLE}</h1>

            <form onSubmit={handleSubmit}>
                {/* INPUT NAME */}
                <InputField 
                    label={REGISTER_FORM.INPUT_FIELDS.NAME.LABEL}
                    errorMessage={REGISTER_FORM.INPUT_FIELDS.NAME.ERROR_MESSAGE}
                    id={REGISTER_FORM.INPUT_FIELDS.NAME.ID}
                    name={REGISTER_FORM.INPUT_FIELDS.NAME.NAME}
                    placeholder={REGISTER_FORM.INPUT_FIELDS.NAME.PLACEHOLDER}
                    type={REGISTER_FORM.INPUT_FIELDS.NAME.TYPE}
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    classNames={{
                        container: 'container',
                        label: '',
                        input: '',
                        errorMessage: '',
                    }}
                    showErrorMessage={inputName && inputName.length === 0}
                />

                {/* INPUT USERNAME */} 
                <InputField 
                    label={REGISTER_FORM.INPUT_FIELDS.USERNAME.LABEL}
                    errorMessage={REGISTER_FORM.INPUT_FIELDS.USERNAME.ERROR_MESSAGE}
                    id={REGISTER_FORM.INPUT_FIELDS.USERNAME.ID}
                    name={REGISTER_FORM.INPUT_FIELDS.USERNAME.NAME}
                    placeholder={REGISTER_FORM.INPUT_FIELDS.USERNAME.PLACEHOLDER}
                    type={REGISTER_FORM.INPUT_FIELDS.USERNAME.TYPE}
                    value={inputUsername}
                    onChange={(e) => setInputUsername(e.target.value)}
                    classNames={{
                        container: 'container mt-2',
                        label: '',
                        input: '',
                        errorMessage: '',
                    }}
                    showErrorMessage={inputUsername && inputUsername.length === 0}
                />

                {/* INPUT EMAIL */}
                <InputField 
                    label={REGISTER_FORM.INPUT_FIELDS.EMAIL.LABEL}
                    errorMessage={REGISTER_FORM.INPUT_FIELDS.EMAIL.ERROR_MESSAGE}
                    id={REGISTER_FORM.INPUT_FIELDS.EMAIL.ID}
                    name={REGISTER_FORM.INPUT_FIELDS.EMAIL.NAME}
                    placeholder={REGISTER_FORM.INPUT_FIELDS.EMAIL.PLACEHOLDER}
                    type={REGISTER_FORM.INPUT_FIELDS.EMAIL.TYPE}
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    classNames={{
                        container: 'container mt-2',
                        label: '',
                        input: '',
                        errorMessage: '',
                    }}
                    showErrorMessage={inputEmail && inputEmail.length === 0 && inputEmail.includes("@")}
                />

                {/* INPUT PASSWORD */}
                <InputField
                    label={REGISTER_FORM.INPUT_FIELDS.PASSWORD.LABEL}
                    errorMessage={REGISTER_FORM.INPUT_FIELDS.PASSWORD.ERROR_MESSAGE}
                    id={REGISTER_FORM.INPUT_FIELDS.PASSWORD.ID}
                    name={REGISTER_FORM.INPUT_FIELDS.PASSWORD.NAME}
                    placeholder={REGISTER_FORM.INPUT_FIELDS.PASSWORD.PLACEHOLDER}   
                    type={REGISTER_FORM.INPUT_FIELDS.PASSWORD.TYPE}
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    classNames={{
                        container: 'container mt-2',
                        label: '',
                        input: '',
                        errorMessage: '',
                    }}
                    showErrorMessage={inputPassword && inputPassword.length === 0}
                />

                {/* CONFIRM PASSWORD */}
                <InputField
                    label={REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.LABEL}
                    errorMessage={REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.ERROR_MESSAGE}
                    id={REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.ID}
                    name={REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.NAME}
                    placeholder={REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.PLACEHOLDER}
                    type={REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.TYPE}
                    value={inputConfirmPassword}
                    onChange={(e) => setInputConfirmPassword(e.target.value)}
                    classNames={{
                        container: 'container mt-2',
                        label: '',
                        input: '',
                        errorMessage: '',
                    }}
                    showErrorMessage={inputConfirmPassword && inputConfirmPassword.length === 0}    
                />

                {/* BUTTON REGISTER */}
                <button type="submit" className="buttonRegister" disabled={isDiabled()}> 
                    {REGISTER_FORM.BUTTON_REGISTER.LABEL} 
                </button>
            </form>
        </div>
    )
}
