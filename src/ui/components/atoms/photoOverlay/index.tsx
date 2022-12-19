import './PhotoOverlay.css'

type Props = {node: React.ReactNode}
const PhotoOverlay = ({node}: Props) => (
    <div id='overlay'>{node}</div>
)

const OverlayEntry = ({ text, url }: {text: string, url?: string}) => (
    <a className='topic' href={url??"#"}>{text}</a>
) 

export default PhotoOverlay
export { OverlayEntry }