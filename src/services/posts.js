import axios from "axios";
const baseUrl = "http://localhost:5000/api/posts";

export const getAllPosts = async () => {
    const result = await axios.get(`${baseUrl}/sorted`);
    return result.data;
}

// Returns X last post published (sorted by update time).
export const getLastXpublishedPosts = async (limit) => {
    const result = await axios.get(`${baseUrl}/${limit}/sorted`);
    return result.data;
}

// Returns the specified post details and comments.
export const getSpecificPost = async (id) => {
    const result = await axios.get(`${baseUrl}/${id}`);
    return result.data;
}

// Creates and returns every comment from the post. Identified by the id passed in the params.
export const createComment = async (id, token ,body) => {
    const result = await axios.post(`${baseUrl}/${id}/comment`, body ,{headers: {"Authorization" : `Bearer ${token}`}});
    return result.data;
}