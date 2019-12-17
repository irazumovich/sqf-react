import axios from 'axios';

// import { history } from '_root/components/root/root';
// import storageAPI from '_root/tools/storage-tool';

class RequestAPI {
    constructor(options = {}) {
        this.token = localStorage.get('token');
        this.client = axios.create(options);
        this.refreshRequest = null;

        this.client.interceptors.request.use(
            config => {
                if (!this.token) {
                    return config;
                }

                const newConfig = {
                    headers: {},
                    ...config
                };

                newConfig.headers.Authorization = `Bearer ${this.token}`;

                return newConfig;
            },
            error => {
                throw error;
            }
        );
        this.client.interceptors.response.use(
            r => r,
            async error => {
                if (error.response.status === 400) {
                    history.push('/logout');
                }

                if (error.response.status !== 401 || error.config.retry) {
                    throw error;
                }

                if (!this.token) {
                    this.token = storageAPI.get('token');
                }

                if (!this.refreshRequest) {
                    // for query which will send at the same time
                    this.refreshRequest = this.client.get('/refresh');
                }

                const {
                    data: {
                        data: { access_token }
                    }
                } = await this.refreshRequest;
                this.refreshRequest = null;

                this.token = access_token;
                storageAPI.set('token', access_token);

                const newRequest = {
                    ...error.config,
                    retry: true
                };

                return this.client(newRequest);
            }
        );
    }

    get = async (url, params) => {
        return await this.client.get(url, params);
    };

    post = async (url, params) => {
        return await this.client.post(url, params);
    };

    put = async (url, params) => {
        return await this.client.put(url, params);
    };

    delete = async (url, params) => {
        return await this.client.delete(url, params);
    };
}

export default new RequestAPI({
    baseURL: process.env.BACKEND_APP_HOST
});
