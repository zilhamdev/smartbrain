import React from 'react'
import "./FaceRecognition.css";

export default function FaceRecognition({ imgUrl, box }) {
    return (
        <div className="centered ma">
            <div className="relative mt3">
                <img id="imageInput" src={imgUrl} alt="" width="500vw" height="auto" />
                    {imgUrl && box?
                    box.map(faceBox => {
                        return <div key={faceBox.id} className="bounding-box" style={{ top: faceBox.topRow, right: faceBox.rightCol, bottom: faceBox.bottomRow, left: faceBox.leftCol }}></div>
                    }) : null}
            </div>
        </div>
    )
}


//{/* <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div> */}