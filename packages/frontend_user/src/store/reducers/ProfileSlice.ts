import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../models/IUser";

interface UserState extends IUser {
}

const initialState: UserState = {
    avatar: '',
    company: '',
    email: '',
    id: 0,
    name: '',
    position: '',
    surname: ''
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setAvatatar(state, action){
            state.avatar = action.payload
        },
        setCompany(state, action){
            state.company = action.payload
        }
        ,setName(state, action){
            state.name = action.payload
        }
        ,setPosition(state, action){
            state.position = action.payload
        }
        ,
        setSurname(state, action){
            state.surname = action.payload;
        },
        setProfile(state, action){
            for (const [key, value] of Object.entries(action.payload)) {
               (state as any)[key] = value;
              }
        }
    },
});

export const {setAvatatar, setCompany,setName,setPosition, setProfile, setSurname } = profileSlice.actions
export default profileSlice.reducer;
