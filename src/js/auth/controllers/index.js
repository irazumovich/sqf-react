import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get('access_token',  { path: '/' });
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const checkAuth = () => {
    return axios.get(process.env.BACKEND_APP_HOST + "/me", {
        token: token
    });
};

export const logIn = ({email, password}) => {
    console.log(email, password)
    return axios.post(process.env.BACKEND_APP_HOST + "/login", {
        email: email,
        password: password
    });
};