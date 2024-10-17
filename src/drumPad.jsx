import { useRef } from "react";
import { useSelector } from "react-redux";

function CreateDivs(note, noteSrc) {
    let ref = useRef(null);

    const handleClick = () => {
        ref.current.play();
    };

    return (
        <div key={note} id={note + "Elment"} className="drum-pad" onClick={handleClick}>
            {note}
            <audio ref={ref} id={note} src={noteSrc}></audio>
        </div>
    );

}

function DrumPad() {
    const drumList = useSelector((state) => state.drumList);

    return (
        <div id="test">
            {Object.entries(drumList).map((note) => CreateDivs(note[0], note[1]))}
        </div>
    );

}

export default DrumPad;