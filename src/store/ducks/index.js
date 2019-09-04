import { combineReducers } from "redux";

import user from "./user";
import crud from "./crud";

export default combineReducers({
    user,
    crud
})