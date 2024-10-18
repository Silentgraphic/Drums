import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notesList: {
        q: "q.mp3",
        w: "w.mp3",
        e: "e.mp3",
        a: "a.mp3",
        s: "s.mp3",
        d: "d.mp3",
        z: "z.mp3",
        x: "x.mp3",
        c: "c.mp3",
    },
    currentNote: " "
};

const drumSlice = createSlice({
    name: "drumList",
    initialState,
    reducers: {
        setCurrentNote: (state, action) => {
            state.currentNote = action.payload;
        }
    }
});

export const { setCurrentNote } = drumSlice.actions;

export default drumSlice.reducer;