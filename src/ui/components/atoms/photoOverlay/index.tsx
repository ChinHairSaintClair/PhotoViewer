import './PhotoOverlay.css'

type Props = {node: React.ReactNode}
const PhotoOverlay = ({node}: Props) => (
    <div id='overlay'>{node}</div>
)

export default PhotoOverlay