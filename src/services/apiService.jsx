import axios from "axios";

export const API_BASE_URL = "https://4f0d-2401-4900-8822-8a8-b920-166f-7e25-7131.ngrok-free.app/rajlaxmi"; // Replace with your actual base URL

// 🔹 GET: Fetch data from a dynamic endpoint
export const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 🔹 POST: Send data to a dynamic endpoint
export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 🔹 PUT: Update data on a dynamic endpoint
export const updateData = async (endpoint, id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${endpoint}/${id}`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 🔹 DELETE: Remove data from a dynamic endpoint
export const deleteData = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
