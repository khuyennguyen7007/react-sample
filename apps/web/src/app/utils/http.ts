import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { environment } from '@env/environment';

let httpInstance: AxiosInstance;

export function getHttpInstance(): AxiosInstance {
  if (!httpInstance) {
    httpInstance = axios.create();
    httpInstance.interceptors.request.use(function (config): AxiosRequestConfig {
      config.baseURL = environment.baseApiURL;
      return config;
    });
  }

  return httpInstance;
}

export function getRequest(url: string, config: AxiosRequestConfig = {}) {
  return getHttpInstance().get(url, config);
}

export function postRequest(url: string, config: AxiosRequestConfig = {}) {
  return getHttpInstance().post(url, config);
}

export function putRequest(url: string, config: AxiosRequestConfig = {}) {
  return getHttpInstance().put(url, config);
}

export function patchRequest(url: string, config: AxiosRequestConfig = {}) {
  return getHttpInstance().patch(url, config);
}

export function deleteRequest(url: string, config: AxiosRequestConfig = {}) {
  return getHttpInstance().delete(url, config);
}
