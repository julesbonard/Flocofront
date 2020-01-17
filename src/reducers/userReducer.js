import { USER_LOGIN, USER_LOGOUT, LEVEL_LOGIN } from "./action";

const initialState = {
    user: "",
    level: ""
};

function userReducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case USER_LOGIN:
            return {
                ...state,
                user: payload.user
            };
        case LEVEL_LOGIN:
            return {
                ...state,
                level: payload.user
            }
        case USER_LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default userReducer;
