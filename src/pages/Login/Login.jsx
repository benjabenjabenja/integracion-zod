import { useState, useCallback } from "react"
//Componets:
import InputField from '../../componets/InputField/InputField'
import ErrorBoundary from '../../componets/ErrorBoundary/ErrorBoundary'
//Hooks:
import useForm from "../../hooks/useForm"
//Router:
import { Link } from 'react-router-dom'
//Utils:
import { LOGIN_FORM, REDIRECTION_URLS } from '../../utils/const'
//Styles:
import './Login.css'

export const Login = () => {
    const {
        form,
        setForm,
        validateInputs,
        isValid: validForm
    } = useForm({
        initialState: LOGIN_FORM.FORM_ENTRIES_STATE
    })

    const hasError = useCallback(() => {
        const isValid = (   
            form.inputUsername.errorMessages?.length > 0 || 
            form.inputPassword.errorMessages?.length > 0
        )
        return isValid
    }, [
        form.inputUsername.errorMessages, 
        form.inputPassword.errorMessages
    ])

    const handleSubmit = (e) => {
        e.preventDefault()  
        console.log({form})
    }

    const handleRememberMe = () => {
        setForm({...form, rememberMe: { 
            ...form.rememberMe,
            value: !form.rememberMe.value 
        }})
    }
    
    return (
        <div>
            <h1>{LOGIN_FORM.FORM_TITLE}</h1>

            {hasError() && (
                <ErrorBoundary>
                    {form.inputUsername.errorMessages && (
                        <span>{form.inputUsername.errorMessages?.join(', ')}</span>
                    )}
                    {form.inputPassword.errorMessages && (
                        <span>{form.inputPassword.errorMessages?.join(', ')}</span>
                    )}
                </ErrorBoundary>
            )}

            <form onSubmit={handleSubmit}>

                {/* INPUT USERNAME */}
                <InputField
                    label={LOGIN_FORM.INPUT_FIELDS.USERNAME.LABEL}
                    id={LOGIN_FORM.INPUT_FIELDS.USERNAME.ID}
                    name={LOGIN_FORM.INPUT_FIELDS.USERNAME.NAME}
                    placeholder={LOGIN_FORM.INPUT_FIELDS.USERNAME.PLACEHOLDER}
                    type={LOGIN_FORM.INPUT_FIELDS.USERNAME.TYPE}
                    value={form.inputUsername.value}
                    onChange={(e) => validateInputs({
                        inputName: LOGIN_FORM.INPUT_FIELDS.USERNAME.FORM_INPUT_NAME, 
                        value: e.target.value, 
                        name: LOGIN_FORM.INPUT_FIELDS.USERNAME.NAME
                    })}
                    classNames={{
                        container: 'container mt-2',
                        label: '',
                        input: '',
                        errorMessage: '',
                    }}
                    showErrorMessage={''}
                />

                {/* INPUT PASSWORD */}
                <InputField
                    label={LOGIN_FORM.INPUT_FIELDS.PASSWORD.LABEL}
                    id={LOGIN_FORM.INPUT_FIELDS.PASSWORD.ID}
                    name={LOGIN_FORM.INPUT_FIELDS.PASSWORD.NAME}
                    placeholder={LOGIN_FORM.INPUT_FIELDS.PASSWORD.PLACEHOLDER}
                    type={LOGIN_FORM.INPUT_FIELDS.PASSWORD.TYPE}
                    value={form.inputPassword.value}
                    onChange={(e) => validateInputs({
                        inputName: LOGIN_FORM.INPUT_FIELDS.PASSWORD.FORM_INPUT_NAME, 
                        value: e.target.value, 
                        name: LOGIN_FORM.INPUT_FIELDS.PASSWORD.NAME
                    })}
                    classNames={{
                        container: 'container mt-2',
                        label: '',
                        input: '',
                        errorMessage: '',
                    }}
                    showErrorMessage={''}
                />

                {/* REMEMBER ME */}
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value={form.rememberMe.value} 
                        onChange={handleRememberMe} />
                    <label 
                        className="form-check-label" 
                        htmlFor="rememberMe"
                    >
                        {LOGIN_FORM.REMEMBER_ME.LABEL}
                    </label>
                </div>
                
                {/* REDIRECTION TO REGISTER */}
                <div className="container mt-2 text-sm">
                    <Link to={REDIRECTION_URLS.REGISTER}>
                        {LOGIN_FORM.REDIRECTION_TO_REGISTER.LABEL}
                    </Link>
                </div>
                
                {/* BUTTON LOGIN */}
                <button 
                    type="submit" 
                    className="buttonRegister" 
                    disabled={!validForm}
                >
                    {LOGIN_FORM.BUTTON_LOGIN.LABEL}
                </button>

            </form>
        </div>
    )
}

export default Login
