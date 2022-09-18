import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

export class HttpClient {
	private _client: AxiosInstance;

	constructor() {
		const config = {
			baseURL: STAAK_ENV.API_URL,
		};

		//axios.defaults.withCredentials = true;
		this._client = axios.create(config);
		this._initErrorInterceptor();
		this._initResponseDurationInterceptor();
	}

	get clientInstance() {
		return this._client;
	}

	getUri(config?: AxiosRequestConfig): string {
		return this._client.getUri(config);
	}

	request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
		return this._client.request(config);
	}

	head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
		return this._client.head(url, config);
	}

	options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
		return this._client.options(url, config);
	}

	get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
		return this._client.get(url, config);
	}

	delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
		return this._client.delete(url, config);
	}

	post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
		return this._client.post(url, data, config);
	}

	put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
		return this._client.put(url, data, config);
	}

	patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
		return this._client.patch(url, data, config);
	}

	/**
	 * Returns response duration in duration property of response.
	 */
	private _initResponseDurationInterceptor() {
		const requestStartTimeInterceptor = (config: any) => {
			config.metadata = {
				startTime: new Date(),
			};
			return config;
		};
		this._client.interceptors.request.use(requestStartTimeInterceptor);

		const responseEndTimeInterceptor = (response: any) => {
			/** Calculate response time */
			response.duration = new Date().getTime() - response.config.metadata.startTime.getTime();
			return response;
		};
		this._client.interceptors.response.use(responseEndTimeInterceptor);
	}

	private _initErrorInterceptor() {
		const responseInterceptor = (res: AxiosResponse) => {
			return res;
		};

		const errorInterceptor = async (error: any) => {
			return Promise.reject(error);
		};

		this._client.interceptors.response.use(responseInterceptor, errorInterceptor);
	}
}

export const httpClient = new HttpClient();
