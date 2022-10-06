import * as ActionType from "./ActionType";
import axios from "axios";

export const getData= () =>async (dispatch) => {
    await axios.get('https://jsonplaceholder.typicode.com/poss')
    .then((response) => {
        dispatch({
            type: ActionType["GET_DATA"],
            payload: response.data,

        });
    })
    .catch((error) => {
        dispatch({
            type: ActionType["USER_ERROR"],
            payload: error.response,
        });
    });
};