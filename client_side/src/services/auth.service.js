import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';
// const API_URL = 'https://layers-network.herokuapp.com/api/auth/';

const register = (user_name, name, email, password, admin) => {
  return axios.post(API_URL + 'register', {
    user_name,
    name,
    email,
    password,
    admin,
  });
};

const login = (user_name, password) => {
  return axios
    .post(API_URL + 'login', {
      user_name,
      password,
    })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem('user', JSON.stringify(res.data));
      }
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
