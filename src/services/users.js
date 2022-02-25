import axios from "axios";
const baseUrl = "/api";

export const registerUser = async (body) => {
    const result = await axios.post(`${baseUrl}/register`, body);
    return result.data;
}

export const loginUser = async (body) => {
    const result = await axios.post(`${baseUrl}/login`, body);
    return result.data;
}