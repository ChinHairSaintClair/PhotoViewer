import './Loader.css'

type Props = { visible: boolean }
const Loader = ({ visible=false }: Props) => (
    <h3 id='load' style={{ opacity: visible ? 1 : 0 }}>Loading...</h3>
)

export default Loader