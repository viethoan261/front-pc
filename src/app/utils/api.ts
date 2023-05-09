import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "https://web-production-7699.up.railway.app/",
});

interface UseCallApiProps {
  endPoint: string;
  method: AxiosRequestConfig["method"];
  payload?: any;
  headers?: AxiosRequestConfig["headers"];
  params?: AxiosRequestConfig["params"];
}

interface UseCallApiResponse {
  response: AxiosResponse | null;
  error: any;
}

export const useCallApi = async ({
  endPoint,
  headers,
  method,
  params,
  payload,
}: UseCallApiProps): Promise<UseCallApiResponse> => {
  try {
    const result = await api({
      method,
      url: endPoint,
      headers,
      data: payload,
      params,
    });

    return {
      response: result,
      error: null,
    };
  } catch (error) {
    return {
      response: null,
      error,
    };
  }
};
