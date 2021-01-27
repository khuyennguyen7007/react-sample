import { configure } from 'axios-hooks';
import Axios, { AxiosRequestConfig } from 'axios';
import { environment } from '@env/environment';

export function useAxiosConfig() {
  const axios = Axios.create({
    baseURL: environment.baseApiURL,
  });
  axios.interceptors.request.use(function(config): AxiosRequestConfig {
    console.log(config)
    return config;
  });
  configure({ axios });
}
