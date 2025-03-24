import { createSlice } from "@reduxjs/toolkit";
 
const appSlice = createSlice(
    {
        name: "app",
        initialState: {
            isMenuOpen: true,
        },
        reducers: {
            toggleMenu: (state,actions) => 
                state.isMenuOpen = !state.isMenuOpen,
            
        }
    }
)

export default appSlice.reducer;
export const { toggleMenu} = appSlice.actions;