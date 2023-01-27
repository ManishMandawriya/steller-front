import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { CODE, VALIDATION_MESSAGE } from "../constants/Constants";
import 'react-toastify/dist/ReactToastify.css';
import { STELLER_FRONT_BASE_URL } from "../config/Config";

const apiinstance = axios.create({
  baseURL:STELLER_FRONT_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",
    "Authorization": "Bearer " + localStorage.getItem('isUserLoginToken'),
    "device_type": "web"
  }
})



export const POSTAPI = (URL: string, params: any,toastStatus:any=true) => {
  const promise = apiinstance.post(URL, params, {
    validateStatus: status => status >= 200 && status < 600
  });
  
  const dataPromise = promise.then((response) => response).then((response) => {
    if (response?.status === CODE?.OK_CODE || response?.status ===  CODE?.CREATED) {
      if (response?.data?.status) {
        if(toastStatus){toast.success(response.data?.message)}
        return response.data;
      }
      else {
        toast.error(response.data?.message);
        return response.data;
      }
    }
    else if (response?.status === CODE?.BAD_REQUEST_CODE) {
      toast.error(response.data?.message);
      return response?.data;
    }
    else if (response?.status === CODE?.UNAUTHORIZED_CODE) {
      localStorage.clear();
      sessionStorage.clear()
      window.location.href =  '/login'
    }
    else if (response?.status === CODE?.INTERNAL_SERVER_ERROR) {
      toast.error(response.data?.message);
      return response?.data;

    }
    else if (response?.status === CODE?.VALIDATION_CODE) {
      toast.error(response.data?.message);
      return response?.data;

    }
    else {
      toast.error(VALIDATION_MESSAGE?.CATCH_ERROR);
    }
  }).catch((error) => {
    toast.error(VALIDATION_MESSAGE?.CATCH_ERROR);
  });
  return dataPromise;
};

