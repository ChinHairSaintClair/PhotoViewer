import './PhotoToolbar.css'
import OutlinedButton from '../outlinedButton/index'

type Props = {onDownload: () => void, onRotate: () => void, onScale: () => void}
const PhotoToolbar = ({ onDownload, onRotate, onScale }: Props) => (
    <div id="toolbar">
        <OutlinedButton title='download' onClick={onDownload} disabled style={{ opacity: 0 }}>Download</OutlinedButton>
        <OutlinedButton title='rotate' onClick={() => onRotate()}>Rotate</OutlinedButton>
        <OutlinedButton title='zoom' onClick={() => onScale()}>Zoom</OutlinedButton>
    </div>
)

export default PhotoToolbar