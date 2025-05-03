import { useState, useCallback } from "react"
//Componets:
import InputField from '../../componets/InputField/InputField'
//Utils:
import { LOGIN_FORM } from '../../utils/const'
//Styles:
import './Login.css'

export const Login = () => {
    const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const isDiabled = useCallback(() => {
        return inputUsername.length === 0 || inputPassword.length === 0
    }, [inputUsername, inputPassword])
    
    
    return (
        <div>
            <h1>{LOGIN_FORM.FORM_TITLE}</h1>

            <form>

                {/* INPUT USERNAME */}
                <InputField
                    label={LOGIN_FORM.INPUT_FIELDS.USERNAME.LABEL}
                    id={LOGIN_FORM.INPUT_FIELDS.USERNAME.ID}
                    name={LOGIN_FORM.INPUT_FIELDS.USERNAME.NAME}
                    placeholder={LOGIN_FORM.INPUT_FIELDS.USERNAME.PLACEHOLDER}
                    type={LOGIN_FORM.INPUT_FIELDS.USERNAME.TYPE}
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

                {/* INPUT PASSWORD */}
                <InputField
                    label={LOGIN_FORM.INPUT_FIELDS.PASSWORD.LABEL}
                    id={LOGIN_FORM.INPUT_FIELDS.PASSWORD.ID}
                    name={LOGIN_FORM.INPUT_FIELDS.PASSWORD.NAME}
                    placeholder={LOGIN_FORM.INPUT_FIELDS.PASSWORD.PLACEHOLDER}
                    type={LOGIN_FORM.INPUT_FIELDS.PASSWORD.TYPE}
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
                
                <button type="submit" className="buttonRegister" disabled={isDiabled()}>{LOGIN_FORM.BUTTON_LOGIN.LABEL}</button>
            </form>
        </div>
    )
}

export default Login
