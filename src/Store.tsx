import { createStore, CombinedState, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { GetHomeDetailsReducer, GetServicesReducer, GetSkillsReducer, GetPortfolioReducer, GetTestmonialReducer } from "./Redux/Reducers/HomeReducer"


const reducer = combineReducers({

    // HOME
    GetHomeDetailsState: GetHomeDetailsReducer,
    GetServicesState: GetServicesReducer,
    GetSkillsState: GetSkillsReducer,
    GetPortfolioState: GetPortfolioReducer,
    GetTestmonialState: GetTestmonialReducer,

})

let initialState = {}
const middleWare = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)))
export default store