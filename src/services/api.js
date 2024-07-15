import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

export const login = async (email, password) => {
  const response = await api.post('/login', { email, password });
  return response.data;
};

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const searchUsers = async (query) => {
  const response = await api.get(`/search?query=${query}`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await api.post('/user', user);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await api.put(`/user/${id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  await api.delete(`/user/${id}`);
};
