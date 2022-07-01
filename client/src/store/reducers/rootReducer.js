import storeActions from "../actions";
import constants from "src/constants";

const initState = {
    user: "",
    islogin: false,
    themeType: "light",
    menuSelect: null
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case storeActions.CHANGE_THEME:
            let newTheme = (action.payload === 'light') ? 'dark' : 'light';
            return {
                ...state,
                themeType: newTheme
            }
        case storeActions.USER_LOGIN:
            localStorage.setItem(constants.ACCESSTOKEN, action.payload["accesstoken"])
            return {
                ...state,
                user: action.payload["email"],
                islogin: true
            }
        case storeActions.USER_LOGOUT:
            localStorage.removeItem(constants.ACCESSTOKEN)
            return {
                ...state,
                user: '',
                islogin: false
            }
        case storeActions.SET_MENU_SELECT:
            return {
                ...state,
                menuSelect : action.payload,
            }
        default:
            return state
    }
}

export default rootReducer;