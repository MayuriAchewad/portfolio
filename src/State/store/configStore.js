import { createStore, combineReducers } from "redux";
import { cntReducer } from "../Reducer/cntReducer";

export const configStore = () => {
    const store = createStore(
        combineReducers({cntReducer}),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
}