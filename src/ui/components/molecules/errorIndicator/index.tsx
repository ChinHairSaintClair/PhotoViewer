import './ErrorIndicator.css'

import OutlinedButton from '../../atoms/outlinedButton'

type Props = { error: string, retryText?: string, onRetry: () => void }
const ErrorIndicator = ({ error, retryText, onRetry }: Props) => (
    <div id="error_indicator">
        <h3>{`${error}`}</h3>
        <OutlinedButton title='retry' onClick={onRetry}>{retryText??'Retry'}</OutlinedButton>
    </div>
)

export default ErrorIndicator