import { createSlice } from "@reduxjs/toolkit";

const SearchSlice=createSlice({
    name: 'search',
    initialState: {},
    reducers:{
        cachedSearch: (state,action)=>{
         state=Object.assign(state,action.payload);
        }
    }
});

export const {cachedSearch}=SearchSlice.actions;
export default SearchSlice.reducer;