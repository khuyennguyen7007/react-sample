import { AxiosRequestConfig } from "axios";

export const requestBaseInterceptors = (config: AxiosRequestConfig): AxiosRequestConfig => {
    console.log(config);
    return config;
};
