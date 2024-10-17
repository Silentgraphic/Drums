import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
};

const drumSlice = createSlice({
    name: "drumList",
    initialState,
    reducers: {
    }
});

export default drumSlice.reducer;