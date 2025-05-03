import './ErrorBoundary.css'

export const ErrorBoundary = ({children}) => {
    return (
        <div className="error-boundary">
            {children}
        </div>
    )
}

export default ErrorBoundary
