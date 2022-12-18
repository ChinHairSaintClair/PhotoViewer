import './NavButton.css'

type Props = {onToggle: () => void}
const NavButton = ({ onToggle }: Props) => (
    <button id='nav_toggle' type='button' onClick={onToggle}>
        <i className="open">Topic</i>
        <i className="close">X</i>
    </button>
)

export default NavButton