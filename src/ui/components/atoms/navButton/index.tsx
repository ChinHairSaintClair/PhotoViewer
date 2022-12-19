import './NavButton.css'

type Props = { topic: string, onToggle: () => void}
const NavButton = ({ topic, onToggle }: Props) => (
    <button id='nav_toggle' type='button' onClick={onToggle}>
        <i className="open">{topic}</i>
        <i className="close">X</i>
    </button>
)

export default NavButton