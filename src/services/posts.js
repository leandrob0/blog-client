import axios from "axios";
const baseUrl = "/api/posts";

export const getLastXpublishedPosts = async (limit) => {
    const result = await axios.get(`${baseUrl}/${limit}/sorted`);
    return result.data;
}

export const getSpecificPost = async (id) => {
    const result = await axios.get(`${baseUrl}/${id}`);
    return result.data;
}