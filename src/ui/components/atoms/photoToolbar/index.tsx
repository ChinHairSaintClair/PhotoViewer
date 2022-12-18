import './PhotoToolbar.css'

type Props = {onDownload: () => void, onRotate: () => void, onScale: () => void}
const PhotoToolbar = ({ onDownload, onRotate, onScale }: Props) => (
    <div id="toolbar">
        <button title='download' onClick={onDownload}>Download</button>
        <button title='rotate' onClick={() => onRotate()}>Rotate</button>
        <button title='zoom' onClick={() => onScale()}>Zoom</button>
    </div>
)

export default PhotoToolbar