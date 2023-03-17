import axios from 'axios';
import type {
    AxiosInstance,
    AxiosError,
    AxiosResponse,
} from 'axios';
import {showMessage} from './status';
import {message} from 'ant-design-vue';

/* 服务器返回数据的的类型，根据接口文档确定 */
const service: AxiosInstance = axios.create({
    baseURL: '',
    timeout: 50000,
});

/* 请求拦截器 */
service.interceptors.request.use(
    (config) => {
        //  伪代码
        // if (user.token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error: AxiosError) => {
        message.error(error.message);
        return Promise.reject(error);
    }
);

/* 响应拦截器 */
service.interceptors.response.use(
    (response: AxiosResponse) => {
        const {code, message, data} = response.data;

        // 根据自定义错误码判断请求是否成功
        if (code === 200) {
            // 将组件用的数据返回
            return data;
        } else {
            // 处理业务错误。
            message.error(message);
            return Promise.reject(new Error(message));
        }
    },
    (error: AxiosError) => {
        // 处理 HTTP 网络错误
        // HTTP 状态码
        const status = error.response?.status as number;
        message.error(showMessage(status));
        return Promise.reject(error);
    }
);

/* 导出 axios 实例 */
export default service;
