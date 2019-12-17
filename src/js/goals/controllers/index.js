import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token = cookies.get('access_token',  { path: '/' });
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export const loadGoals = (userId) => {
    return axios.get(process.env.BACKEND_APP_HOST + `/users/${userId}/goals`);
};

export const logIn = ({email, password}) => {
    console.log(email, password)
    return axios.post(process.env.BACKEND_APP_HOST + "/login", {
        email: email,
        password: password
    });
};