import { USER_LOGIN, USER_LOGOUT } from "./action";

const initialState = {
    user: ""
};

function userReducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case USER_LOGIN:
            return {
                ...state,
                user: payload.user
            };
        case USER_LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default userReducer;
