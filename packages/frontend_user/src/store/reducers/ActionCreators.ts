import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";


export const fetchUsers = ()=>async (dispatch:AppDispatch)=>{
    try{
        const response = await fetch<IUser[]>('')
    }
}