import axios from 'axios';

export const registerUser = async (userData) => {
  const response = await axios.post('http://localhost:8282/api/v1/auth/register', userData);
  return response;
};

export const loginUser = async (userData) => {
    const response = await axios.post('http://localhost:8282/api/v1/auth/login', userData);
    return response;
  };

  export const saveImage = async (userData) => {
    const response = await axios.post('http://localhost:8282/api/v1/image/click', userData);
    console.log('response--->', response)
    return response;
  };