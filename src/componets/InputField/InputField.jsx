import { useState } from "react" 
//PropTypes:
import PropTypes from "prop-types"
//Utils:
import { SIMBOLS, STYLES } from "../../utils/const"

const InputField = ({ 
    label, errorMessage, defaultValue, classNames, showErrorMessage, ...props }) => {
    const [value, setValue] = useState(() => (defaultValue || SIMBOLS.EMPTY_STRING))

    const handleOnChange = (e) => { 
        setValue(e.target.value)
        props?.onChange && props?.onChange?.(e)
    }

    return (
        <div className={`${classNames?.container}`}>
            {label && (
                <label 
                htmlFor={props.id || props.name} 
                className={`${classNames?.label}`}
                >{label}</label>
            )}

            <input
                {...props}
                onChange={handleOnChange} 
                value={value} 
                className={`${classNames?.input}`} 
                />

            {errorMessage && showErrorMessage && (
                <span 
                    className={`${classNames?.errorMessage}`} 
                    style={STYLES.errorLabel}>{errorMessage}</span>
                )}
        </div>
    )
}

export default InputField

InputField.propTypes = {
    classNames: PropTypes.shape({
        container: PropTypes.string,
        label: PropTypes.string,
        input: PropTypes.string,
        errorMessage: PropTypes.string,
    }),
    errorMessage: PropTypes.string,
    defaultValue: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
}

InputField.defaultProps = {
    classNames: {
        container: '',
        label: '',
        input: '',
        errorMessage: '',
    },
    errorMessage: 'input field is required',
    showErrorMessage: true,
}
