import { createSlice } from "@reduxjs/toolkit";
import { saveWithRedux } from "../services/fetchService";

export const saverSlice = createSlice({
    name: "savedArticles",
    initialState: [],
    reducers: {
        save: (state) => {
            console.log(state);
            saveWithRedux(state)
        }
    }
})

export const { save } = saverSlice.actions
export default saverSlice.reducer