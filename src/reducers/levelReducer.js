import { LEVEL_LOGIN, LEVEL_LOGOUT } from "./action";

const initialState = {
    level: ""
};

function levelReducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case LEVEL_LOGIN:
            return {
                ...state,
                level: payload.level
            }
        case LEVEL_LOGOUT:
            return initialState;
        default:
            return state;
    }
}

export default levelReducer;
