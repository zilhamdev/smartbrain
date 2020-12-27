import "./ImageLinkForm.css"

export default function ImageLinkForm({onInputChange, inputValue, onDetect}) {
    return (
        <div>
            <p className="f3">
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className="form center">
                <div className="center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type="text" name="url" onChange={onInputChange} value={inputValue} />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onDetect}>Detect</button>
                </div>
            </div>
        </div>
    )
}
