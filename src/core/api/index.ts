import { IRequestOptions } from "./typing.ts";

export const BASE_URL = "/api";

export const sendRequest = async (options: IRequestOptions) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const {
        method,
        path,
        headers = {},
        params = undefined,
        data
    } = options;

    let url = BASE_URL + path;

    const requestOptions: RequestInit = {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        body: data ? JSON.stringify(data) : undefined,
    };

    if (params) {
        Object.keys(params).forEach((key) => {
            url = url + "?" + key + "=" + params[key];
        });
    }

    const response = await fetch(url/* .toString() */, {...requestOptions, signal : controller.signal}).finally(()=>clearTimeout(timeoutId));
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
};