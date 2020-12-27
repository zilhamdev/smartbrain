import "./Logo.css";
import Tilt from "react-tilt";
import brain from "./brain.svg";
// import ML from "./machine-learning.svg"

export default function Logo() {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 120, width: 120 }}>
                <div className="Tilt-inner pa3">
                    <img src={brain} alt="brain logo" style={{ width: 100}} />
                </div>
            </Tilt>
        </div>
    );
}