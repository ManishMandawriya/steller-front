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
import { POSTAPI } from "../../api/Api"
import { Dispatch } from "react"

export const GetHomeDetailsAction = (payload: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: GET_HOME_DETAILS_REQUEST
        })

        const data = await POSTAPI("get-home", payload)
        if (data && data?.status === true) {
            dispatch({
                type: GET_HOME_DETAILS_SUCCESS,
                payload: data
            })
        } else {
            dispatch({
                type: GET_HOME_DETAILS_FAIL,
                payload: data
            })
        }
    } catch (error: any) {
        dispatch({
            type: GET_HOME_DETAILS_FAIL,
            payload: error?.message
        })
    }
}



export const GetServicesAction = (payload: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: GET_SERVICES_REQUEST
        })
        const data = await POSTAPI("get-services", payload)
        if (data && data?.status === true) {
            dispatch({
                type: GET_SERVICES_SUCCESS,
                payload: data
            })
        } else {
            dispatch({
                type: GET_SERVICES_FAIL,
                payload: data
            })
        }
    } catch (error: any) {
        dispatch({
            type: GET_SERVICES_FAIL,
            payload: error?.message
        })
    }
}

export const GetSkillsAction = (payload: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: GET_SKILLS_REQUEST
        })
        const data = await POSTAPI("get-skills", payload)
        if (data && data?.status === true) {
            dispatch({
                type: GET_SKILLS_SUCCESS,
                payload: data
            })
        } else {
            dispatch({
                type: GET_SKILLS_FAIL,
                payload: data
            })
        }
    } catch (error: any) {
        dispatch({
            type: GET_SKILLS_FAIL,
            payload: error?.message
        })
    }
}


export const GetPortfolioAction = (payload: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: GET_PORTFOLIO_REQUEST
        })
        const data = await POSTAPI("get-portfolio", payload)
        if (data && data?.status === true) {
            dispatch({
                type: GET_PORTFOLIO_SUCCESS,
                payload: data
            })
        } else {
            dispatch({
                type: GET_PORTFOLIO_FAIL,
                payload: data
            })
        }
    } catch (error: any) {
        dispatch({
            type: GET_PORTFOLIO_FAIL,
            payload: error?.message
        })
    }
}



export const GetTestmonialAction = (payload: any) => async (dispatch: Dispatch<any>) => {
    try {
        dispatch({
            type: GET_TESTMONIAL_REQUEST
        })
        const data = await POSTAPI("get-testmonial", payload)
        if (data && data?.status === true) {
            dispatch({
                type: GET_TESTMONIAL_SUCCESS,
                payload: data
            })
        } else {
            dispatch({
                type: GET_TESTMONIAL_FAIL,
                payload: data
            })
        }
    } catch (error: any) {
        dispatch({
            type: GET_TESTMONIAL_FAIL,
            payload: error?.message
        })
    }
}