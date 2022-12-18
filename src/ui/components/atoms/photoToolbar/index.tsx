type Props = {onDownload: () => void, onRotate: () => void, onScale: () => void}
const PhotoToolbar = ({ onDownload, onRotate, onScale }: Props) => (
    <div style={{ display: 'flex', gap: '8px' }}>
        <button title='download' onClick={onDownload}/>
        <button title='rotate' onClick={() => onRotate()}/>
        <button title='zoom' onClick={() => onScale()}/>
    </div>
)

export default PhotoToolbar