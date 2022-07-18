import { GET_OPTIONS,SAVE_DETAILS } from "./ActionTypes";
import axios from 'axios';
export const GetOptionsData = async () => {
    console.log("GetOptionsData");
    let response = await axios.get(`http://localhost:3001/`)
    return async(dispatch) => {
           try {
                dispatch({
                type: GET_OPTIONS,
                options: response.data
            });
        }
         catch (error) {
        }
    }
}
export const SaveDetails = (obj) => {
    console.log(obj);
    console.log("GetOptionsData");

    
    return async (dispatch) => {
           try {
                dispatch({
                type: SAVE_DETAILS,
                details: obj
            });
        }
         catch (error) {
            
        }
    }
}