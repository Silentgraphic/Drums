import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentNote } from "./slices/drum";

function CreateDivs(note, noteSrc) {
    let ref = useRef(null);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentNote(note));
        ref.current.play();
    };

    return (
        <div key={note} id={note + "Elment"} className="drum-pad" onClick={handleClick}>
            {note}
            <audio className="clip" ref={ref} id={note} src={noteSrc}></audio>
        </div>
    );

}

function DrumPad() {
    const drumList = useSelector((state) => state.drumList.notesList);

    const handleKeyDown = (event) => {
        document.getElementById(event.key.toUpperCase()).play();
    };

    useEffect(() => {
        document.addEventListener("keydown", (event) => handleKeyDown(event));
    });
    return (
        <div id="drumpad">
            {Object.entries(drumList).map((note) => CreateDivs(note[0].toUpperCase(), note[1]))}
        </div>
    );

}

export default DrumPad;