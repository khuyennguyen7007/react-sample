import axios, { AxiosError, AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios';
import { requestBaseInterceptors } from '../interceptors/request-base.interceptor';

let httpInstance: AxiosInstance;

export function getHttpInstance(): AxiosInstance {
    if (!httpInstance) {
        httpInstance = axios.create();
        httpInstance.interceptors.request.use(requestBaseInterceptors)
    }
    
    return httpInstance;
}

function handleHttpError(error: AxiosError): string {
  const genericErrorMessage = 'Something Failed. Try again?';

  if (error.response && error.response.data) {
    return error.response.data.errorMessage || genericErrorMessage;
  }

  return genericErrorMessage;
}

function makeHttpRequest(apiCall: Function) {
  return new Promise(async (resolve, reject) => {
    try {
      const data: AxiosResponse = await apiCall();
      resolve(data.data);
    } catch (e) {
      reject(handleHttpError(e));
    }
  });
}

export function getRequest(path: string, options?: AxiosRequestConfig) {
  return makeHttpRequest(() => axios.get(path, options));
}

export function postRequest(path: string, options?: AxiosRequestConfig) {
  return makeHttpRequest(() => axios.post(path, options));
}

export function putRequest(path: string, options?: AxiosRequestConfig) {
  return makeHttpRequest(() => axios.put(path, options));
}

export function deleteRequest(path: string, options?: AxiosRequestConfig) {
  return makeHttpRequest(() => axios.delete(path, options));
}
