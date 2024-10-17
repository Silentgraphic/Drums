import { useSelector } from "react-redux";

function Display() {
    const currentNote = useSelector((state) => state.drumList.currentNote);
    return (
        <div id="display">{currentNote}</div>
    );
}

export default Display;