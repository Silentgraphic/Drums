import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notesList: {
        a: "a.mp3",
        b: "b.mp3",
        c: "c.mp3",
        d: "d.mp3",
        e: "e.mp3",
        q: "q.mp3",
        s: "s.mp3",
        w: "w.mp3",
        x: "x.mp3",
        z: "z.mp3"
    },
    currentNote: ""
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