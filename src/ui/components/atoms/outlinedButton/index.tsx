import { PropsWithChildren } from 'react'
import './OutlinedButton.css'

type Props = { title: string, disabled?: boolean, onClick: () => void, style?: React.CSSProperties }

const OutlinedButton = ({ ...rest }: PropsWithChildren<Props>) => (
    <button id="outlined_button" {...rest} />
)

export default OutlinedButton