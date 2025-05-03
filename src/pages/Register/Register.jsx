import React, { useCallback, useState } from 'react'
//Componets:
import InputField from '../../componets/InputField/InputField'
import ErrorBoundary from '../../componets/ErrorBoundary/ErrorBoundary'
//Router:
import { useNavigate } from 'react-router-dom'
//Utils:
import { REDIRECTION_URLS, REGISTER_FORM, extraValidationsRegister } from '../../utils/const'

//Styles:
import './Register.css'
//Hooks:
import useForm from '../../hooks/useForm'

export const Register = () => {

    const {
        form, 
        validateInputs,
        isValid
    } = useForm({
        initialState: REGISTER_FORM.FORM_ENTRIES_STATE, 
        extraValidations: extraValidationsRegister
    })

    const navigate = useNavigate()

    const hasError = useCallback(() => {
        return (
            form.inputName?.errorMessages?.length > 0 || 
            form.inputUsername?.errorMessages?.length > 0 || 
            form.inputEmail?.errorMessages?.length > 0 || 
            form.inputPassword?.errorMessages?.length > 0 || 
            form.inputConfirmPassword?.errorMessages?.length > 0
        )
    }, [form])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({form})

        navigate(REDIRECTION_URLS.LOGIN)
    }

    return (
        <div>
            <h1>{REGISTER_FORM.FORM_TITLE}</h1>

            {hasError() && (
                <ErrorBoundary>
                    {form.inputName.errorMessages && (
                        <span>{form.inputName.errorMessages?.join(', ')}</span>
                    )}
                    {form.inputUsername.errorMessages && (
                        <span>{form.inputUsername.errorMessages?.join(', ')}</span>
                    )}
                    {form.inputEmail.errorMessages && (
                        <span>{form.inputEmail.errorMessages?.join(', ')}</span>
                    )}  
                    {form.inputPassword.errorMessages && (
                        <span>{form.inputPassword.errorMessages?.join(', ')}</span>
                    )}
                    {form.inputConfirmPassword.errorMessages && (
                        <span>{form.inputConfirmPassword.errorMessages?.join(', ')}</span>
                    )}
                </ErrorBoundary>
            )}


            <form onSubmit={handleSubmit}>
                {/* INPUT NAME */}
                <InputField 
                    label={REGISTER_FORM.INPUT_FIELDS.NAME.LABEL}
                    errorMessage={REGISTER_FORM.INPUT_FIELDS.NAME.ERROR_MESSAGE}
                    id={REGISTER_FORM.INPUT_FIELDS.NAME.ID}
                    name={REGISTER_FORM.INPUT_FIELDS.NAME.NAME}
                    placeholder={REGISTER_FORM.INPUT_FIELDS.NAME.PLACEHOLDER}
                    type={REGISTER_FORM.INPUT_FIELDS.NAME.TYPE}
                    value={form.inputName.value}
                    onChange={(e) => validateInputs ({
                        inputName: REGISTER_FORM.INPUT_FIELDS.NAME.FORM_INPUT_NAME,
                        value: e.target.value,
                        name: REGISTER_FORM.INPUT_FIELDS.NAME.NAME
                    })}
                    classNames={{
                        container: 'container',
                        label: '',
                        input: '',
                        errorMessage: '',
                    }}
                    showErrorMessage={''}
                />

                {/* INPUT USERNAME */} 
                <InputField 
                    label={REGISTER_FORM.INPUT_FIELDS.USERNAME.LABEL}
                    errorMessage={REGISTER_FORM.INPUT_FIELDS.USERNAME.ERROR_MESSAGE}
                    id={REGISTER_FORM.INPUT_FIELDS.USERNAME.ID}
                    name={REGISTER_FORM.INPUT_FIELDS.USERNAME.NAME}
                    placeholder={REGISTER_FORM.INPUT_FIELDS.USERNAME.PLACEHOLDER}
                    type={REGISTER_FORM.INPUT_FIELDS.USERNAME.TYPE}
                    value={form.inputUsername.value}
                    onChange={(e) => validateInputs({
                        inputName: REGISTER_FORM.INPUT_FIELDS.USERNAME.FORM_INPUT_NAME,
                        value: e.target.value,
                        name: REGISTER_FORM.INPUT_FIELDS.USERNAME.NAME
                    })}
                    classNames={{
                        container: 'container mt-2',
                        label: '',
                        input: '',
                        errorMessage: '',
                    }}
                    showErrorMessage={''}
                />

                {/* INPUT EMAIL */}
                <InputField 
                    label={REGISTER_FORM.INPUT_FIELDS.EMAIL.LABEL}
                    errorMessage={REGISTER_FORM.INPUT_FIELDS.EMAIL.ERROR_MESSAGE}
                    id={REGISTER_FORM.INPUT_FIELDS.EMAIL.ID}
                    name={REGISTER_FORM.INPUT_FIELDS.EMAIL.NAME}
                    placeholder={REGISTER_FORM.INPUT_FIELDS.EMAIL.PLACEHOLDER}
                    type={REGISTER_FORM.INPUT_FIELDS.EMAIL.TYPE}
                    value={form.inputEmail.value}
                    onChange={(e) => validateInputs({
                        inputName: REGISTER_FORM.INPUT_FIELDS.EMAIL.FORM_INPUT_NAME,
                        value: e.target.value,
                        name: REGISTER_FORM.INPUT_FIELDS.EMAIL.NAME
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
                    label={REGISTER_FORM.INPUT_FIELDS.PASSWORD.LABEL}
                    errorMessage={REGISTER_FORM.INPUT_FIELDS.PASSWORD.ERROR_MESSAGE}
                    id={REGISTER_FORM.INPUT_FIELDS.PASSWORD.ID}
                    name={REGISTER_FORM.INPUT_FIELDS.PASSWORD.NAME}
                    placeholder={REGISTER_FORM.INPUT_FIELDS.PASSWORD.PLACEHOLDER}   
                    type={REGISTER_FORM.INPUT_FIELDS.PASSWORD.TYPE}
                    value={form.inputPassword.value}
                    onChange={(e) => validateInputs({
                        inputName: REGISTER_FORM.INPUT_FIELDS.PASSWORD.FORM_INPUT_NAME,
                        value: e.target.value,
                        name: REGISTER_FORM.INPUT_FIELDS.PASSWORD.NAME
                    })}
                    classNames={{
                        container: 'container mt-2',
                        label: '',
                        input: '',
                        errorMessage: '',
                    }}
                    showErrorMessage={''}
                />

                {/* CONFIRM PASSWORD */}
                <InputField
                    label={REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.LABEL}
                    errorMessage={REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.ERROR_MESSAGE}
                    id={REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.ID}
                    name={REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.NAME}
                    placeholder={REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.PLACEHOLDER}
                    type={REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.TYPE}
                    value={form.inputConfirmPassword.value}
                    onChange={(e) => validateInputs({
                        inputName: REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.FORM_INPUT_NAME,
                        value: e.target.value,
                        name: REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.NAME
                    })}
                    classNames={{
                        container: 'container mt-2',
                        label: '',
                        input: '',
                        errorMessage: '',
                    }}
                    showErrorMessage={''}    
                />

                {/* BUTTON REGISTER */}
                <button type="submit" className="buttonRegister" disabled={!isValid}> 
                    {REGISTER_FORM.BUTTON_REGISTER.LABEL} 
                </button>
            </form>
        </div>
    )
}
