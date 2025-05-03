export const SIMBOLS = {
    SPACE: ' ',
    MINUS: '-',
    PLUS: '+',
    EMPTY_STRING: '',
    AT: '@'
}

export const STYLES = {
    errorLabel: {
        color: 'red',
        fontSize: '12px',
        marginTop: '5px',
        textAlign: 'left'
    }
}
export const REDIRECTION_URLS = {
    LOGIN: '/login',
    REGISTER: '/register',
}

export const MIN_CARACTERS_NAME = 1
export const MIN_CARACTERS_PASSWORD = 8

export const REGISTER_FORM = {
    FORM_TITLE: 'Register to My App',
    INPUT_FIELDS: {
        NAME: {
            LABEL: 'Name',
            ERROR_MESSAGE: 'Name is required',
            ID: 'name',
            NAME: 'name',
            PLACEHOLDER: 'Name...',
            TYPE: 'text',
            FORM_INPUT_NAME: 'inputName',
        },
        EMAIL: {
            LABEL: 'Email',
            ERROR_MESSAGE: 'Email is required',
            ID: 'email',
            NAME: 'email',
            PLACEHOLDER: 'Email...',
            TYPE: 'email',
            FORM_INPUT_NAME: 'inputEmail',
        },
        USERNAME: { 
            LABEL: 'Username',
            ERROR_MESSAGE: 'Username is required',
            ID: 'username',
            NAME: 'username',
            PLACEHOLDER: 'Username...',
            TYPE: 'text',
            FORM_INPUT_NAME: 'inputUsername',
        },
        PASSWORD: {
            LABEL: 'Password',
            ERROR_MESSAGE: 'Password is required',
            ID: 'password',
            NAME: 'password',
            PLACEHOLDER: 'Password...',
            TYPE: 'password',
            FORM_INPUT_NAME: 'inputPassword',
        },
        CONFIRM_PASSWORD: {
            LABEL: 'Confirm Password',
            ERROR_MESSAGE: 'Confirm Password is required',
            ID: 'confirmPassword',
            NAME: 'confirmPassword',
            PLACEHOLDER: 'Confirm Password...',
            TYPE: 'password',
            FORM_INPUT_NAME: 'inputConfirmPassword',
        },
    },
    FORM_ENTRIES_STATE: {
        inputName: {
            value: '',
            error: false,
            errorMessages: [],
            isRequired: true,
        },
        inputEmail: {
            value: '',
            error: false,
            errorMessages: [],  
            isRequired: false,
        },
        inputUsername: {
            value: '',
            error: false,
            errorMessages: [],
            isRequired: true,
        },
        inputPassword: {
            value: '',
            error: false,
            errorMessages: [],
            isRequired: true,
        },
        inputConfirmPassword: {
            value: '',
            error: false,
            errorMessages: [],
            isRequired: true,
        },
    },
    BUTTON_REGISTER: {
        LABEL: 'Register',
    },
    EXTRA_VALIDATIONS: {
        EMAIL: {
            ERROR_MESSAGE: 'Enter a valid email',
        },
        PASSWORD: {
            ERROR_MESSAGE: 'Password must be at least 8 characters long',
        },
        CONFIRM_PASSWORD: {
            ERROR_MESSAGE: 'Passwords do not match',
        },
    }
}

export const LOGIN_FORM = {
    FORM_TITLE: 'Login to My App',
    REMEMBER_ME: {
        LABEL: 'Remember me',
        ID: 'rememberMe',
    },
    INPUT_FIELDS: {
        USERNAME: {
            LABEL: 'Username',
            ERROR_MESSAGE: 'Username is required',
            ID: 'username',
            NAME: 'username',
            PLACEHOLDER: 'Username...',
            TYPE: 'text',
            FORM_INPUT_NAME: 'inputUsername',
        },
        PASSWORD: {
            LABEL: 'Password',
            ERROR_MESSAGE: 'Password is required',
            ID: 'password',
            NAME: 'password',
            PLACEHOLDER: 'Password...',
            TYPE: 'password',
            FORM_INPUT_NAME: 'inputPassword',
        },
    },
    BUTTON_LOGIN: {
        LABEL: 'Login',
    },
    FORM_ENTRIES_STATE: {
        inputUsername: {
            value: '',
            error: false,
            errorMessages: [],
            isRequired: true,
        },
        inputPassword: {
            value: '',
            error: false,
            errorMessages: [],
            isRequired: true,
        },
        rememberMe: {
            value: false,
        },
    },
    REDIRECTION_TO_REGISTER: {
        LABEL: 'Don\'t have an account? Register',
    }
}

export const extraValidationsRegister = ({inputName, value, form, setForm, setIsValid}) => {

    if(inputName === 'inputEmail') {
        if(!value.includes(SIMBOLS.AT)) {      
            const message = REGISTER_FORM.EXTRA_VALIDATIONS.EMAIL.ERROR_MESSAGE
            setForm({...form, [inputName]: {
                ...form[inputName], 
                error: true, 
                errorMessages: !form[inputName].errorMessages.includes(message) ? [
                    ...form[inputName].errorMessages, 
                    message
                ] : form[inputName].errorMessages
            }})
            setIsValid(false)
        } else {
            setForm({...form, [inputName]: {
                ...form[inputName],
                value,
                error: false,
                errorMessages: []
            }})
        }
    }

    if(inputName === 'inputPassword') {
        if(value.length < 8) {
            const message = REGISTER_FORM.EXTRA_VALIDATIONS.PASSWORD.ERROR_MESSAGE
            setForm({...form, [inputName]: {
                ...form[inputName], 
                error: true,
                errorMessages: !form[inputName].errorMessages.includes(message) ? [
                    ...form[inputName].errorMessages, 
                    message
                ] : form[inputName].errorMessages
            }})
            setIsValid(false)
        } else {
            setForm({...form, [inputName]: {
                ...form[inputName],
                value,
                error: false,
                errorMessages: []
            }})
        }
    }

    if(inputName === 'inputConfirmPassword') {
        if(value !== form?.inputPassword?.value) {
            console.log({value, valueForm: form?.inputPassword?.value})
            const message = REGISTER_FORM.EXTRA_VALIDATIONS.CONFIRM_PASSWORD.ERROR_MESSAGE

            setForm({...form, [inputName]: {    
                ...form[inputName], 
                error: true,
                errorMessages: !form[inputName].errorMessages.includes(message) ? [
                    ...form[inputName].errorMessages, 
                    message
                ] : form[inputName].errorMessages
            }})
            setIsValid(false)
        } else {
            setForm({...form, [inputName]: {
                ...form[inputName],
                value,
                error: false,
                errorMessages: []
            }})
        }
    }

    setIsValid(form[inputName].error)
}