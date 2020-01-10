import { USER_LOGIN, USER_LOGOUT } from "./action";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    pseudo: "",
    password: "",
    avatar: ""
};

function userReducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case USER_LOGIN:
            return {
                ...state,
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                pseudo: payload.pseudo,
                password: payload.password,
                avatar: payload.avatar
            };
        case USER_LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default userReducer;
