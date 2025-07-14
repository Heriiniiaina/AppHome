import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CompteurState {
  nom: string;
}

const initialState: CompteurState = {
  nom: "",
};

const AuthSlice = createSlice({
  name: 'compteur',
  initialState,
  reducers: {
    setNome(state, action:PayloadAction<string>){
        state.nom = action.payload
    }
  },
});

export const { setNome } = AuthSlice.actions;
export default AuthSlice.reducer;
