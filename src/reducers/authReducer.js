import { LOGIN, LOGOUT } from "./authAction";

const initialState = {
    id: "",
    token: "",
    isAuth: false
};

function authReducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case LOGIN:
            return {
                ...state,
                isAuth: true,
                token: payload.token,
                id: payload.id
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default authReducer;
