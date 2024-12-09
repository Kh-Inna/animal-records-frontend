import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IAppData {
    searchCategoryTitle: string;
}

const initialState: IAppData = {
    searchCategoryTitle: "",
};

export const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        refreshApp: (state) => {
            state.searchCategoryTitle = "";

        },
        saveSearchCategoryTitle: (state, action: PayloadAction<string>) => {
            state.searchCategoryTitle = action.payload;
        },
    },
});

export const {
    refreshApp,
    saveSearchCategoryTitle
} = appSlice.actions;