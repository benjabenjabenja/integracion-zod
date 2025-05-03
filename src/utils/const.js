export const SIMBOLS = {
    SPACE: ' ',
    MINUS: '-',
    PLUS: '+',
    EMPTY_STRING: ''
}

export const STYLES = {
    errorLabel: {
        color: 'red',
        fontSize: '12px',
        marginTop: '5px',
        textAlign: 'left'
    }
}

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
        },
        EMAIL: {
            LABEL: 'Email',
            ERROR_MESSAGE: 'Email is required',
            ID: 'email',
            NAME: 'email',
            PLACEHOLDER: 'Email...',
            TYPE: 'email',
        },
        USERNAME: { 
            LABEL: 'Username',
            ERROR_MESSAGE: 'Username is required',
            ID: 'username',
            NAME: 'username',
            PLACEHOLDER: 'Username...',
            TYPE: 'text',
        },
        PASSWORD: {
            LABEL: 'Password',
            ERROR_MESSAGE: 'Password is required',
            ID: 'password',
            NAME: 'password',
            PLACEHOLDER: 'Password...',
            TYPE: 'password',
        },
        CONFIRM_PASSWORD: {
            LABEL: 'Confirm Password',
            ERROR_MESSAGE: 'Confirm Password is required',
            ID: 'confirm_password',
            NAME: 'confirm_password',
            PLACEHOLDER: 'Confirm Password...',
            TYPE: 'password',
        },
    },
    BUTTON_REGISTER: {
        LABEL: 'Register',
    }
}

export const LOGIN_FORM = {
    FORM_TITLE: 'Login to My App',
    INPUT_FIELDS: {
        USERNAME: {
            LABEL: 'Username',
            ERROR_MESSAGE: 'Username is required',
            ID: 'username',
            NAME: 'username',
            PLACEHOLDER: 'Username...',
            TYPE: 'text',
        },
        PASSWORD: {
            LABEL: 'Password',
            ERROR_MESSAGE: 'Password is required',
            ID: 'password',
            NAME: 'password',
            PLACEHOLDER: 'Password...',
            TYPE: 'password',
        },
    },
    BUTTON_LOGIN: {
        LABEL: 'Login',
    }
}
