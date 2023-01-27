import {
    GET_HOME_DETAILS_REQUEST,
    GET_HOME_DETAILS_SUCCESS,
    GET_HOME_DETAILS_FAIL,

    GET_SERVICES_REQUEST,
    GET_SERVICES_SUCCESS,
    GET_SERVICES_FAIL,

    GET_SKILLS_REQUEST,
    GET_SKILLS_SUCCESS,
    GET_SKILLS_FAIL,

    GET_PORTFOLIO_REQUEST,
    GET_PORTFOLIO_SUCCESS,
    GET_PORTFOLIO_FAIL,

    GET_TESTMONIAL_REQUEST,
    GET_TESTMONIAL_SUCCESS,
    GET_TESTMONIAL_FAIL,


} from "../../constants/HomeConstants"

const initialStateHome = {
    loading: false,
    status: false,
    data: null,
    error: null
}


export const GetHomeDetailsReducer = (state = initialStateHome, action: any) => {
    switch (action.type) {
        case GET_HOME_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_HOME_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                status: true,
                data: action.payload
            }

        case GET_HOME_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                status: false,
                error: action.payload
            }

        default:
            return state
    }
}


export const GetServicesReducer = (state = initialStateHome, action: any) => {
    switch (action.type) {
        case GET_SERVICES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_SERVICES_SUCCESS:
            return {
                ...state,
                loading: false,
                status: true,
                data: action.payload
            }

        case GET_SERVICES_FAIL:
            return {
                ...state,
                loading: false,
                status: false,
                error: action.payload
            }

        default:
            return state
    }
}


export const GetSkillsReducer = (state = initialStateHome, action: any) => {
    switch (action.type) {
        case GET_SKILLS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_SKILLS_SUCCESS:
            return {
                ...state,
                loading: false,
                status: true,
                data: action.payload
            }

        case GET_SKILLS_FAIL:
            return {
                ...state,
                loading: false,
                status: false,
                error: action.payload
            }

        default:
            return state
    }
}



export const GetPortfolioReducer = (state = initialStateHome, action: any) => {
    switch (action.type) {
        case GET_PORTFOLIO_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_PORTFOLIO_SUCCESS:
            return {
                ...state,
                loading: false,
                status: true,
                data: action.payload
            }

        case GET_PORTFOLIO_FAIL:
            return {
                ...state,
                loading: false,
                status: false,
                error: action.payload
            }

        default:
            return state
    }
}



export const GetTestmonialReducer = (state = initialStateHome, action: any) => {
    switch (action.type) {
        case GET_TESTMONIAL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_TESTMONIAL_SUCCESS:
            return {
                ...state,
                loading: false,
                status: true,
                data: action.payload
            }

        case GET_TESTMONIAL_FAIL:
            return {
                ...state,
                loading: false,
                status: false,
                error: action.payload
            }

        default:
            return state
    }
}