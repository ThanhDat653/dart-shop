import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";

const instance: AxiosInstance = axios.create({
   baseURL: "http://localhost:8000/api/v1/",
   withCredentials: false,
   timeout: 5000,
});

instance.interceptors.response.use(
   (response: AxiosResponse) => {
      return response;
   },
   (error: any) => {
      let message: string;

      switch (error.response!.status) {
         case 401:
            message = "Invalid credentials";
            break;

         case 403:
            message = "Access forbidden";
            break;

         default:
            message =
               error.response && error.response!.data
                  ? error.response!.data.message
                  : error.message || error;
            break;
      }

      return Promise.reject(message);
   }
);

export const Axios = {
   axiosGet: (
      endpoint: string,
      config?: AxiosRequestConfig
   ): Promise<AxiosResponse> => {
      return instance.get(endpoint, config);
   },
   axiosPost: (
      endpoint: string,
      body: any,
      config?: AxiosRequestConfig
   ): Promise<AxiosResponse> => {
      return instance.post(endpoint, body, config);
   },
   axiosPut: (
      endpoint: string,
      body: any,
      config?: AxiosRequestConfig
   ): Promise<AxiosResponse> => {
      return instance.put(endpoint, body, config);
   },
};
