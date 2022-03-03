import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createComment } from "../services/posts";

const NewComment = ({ post, updateComment }) => {
  const [comment, setComment] = useState("");
  const postId = useSelector((state) => state.post.value.postId);
  const user = useSelector((state) => state.user.value.username);
  const navigate = useNavigate();

  const handleChange = (e) => setComment(e.target.value);

  const sendComment = async () => {
    // Checks the post selected, and if the user is logged in (state is set).
    if (postId === "" || user === "") {
      return;
    }

    const body = {
      text: comment,
    };

    const token = JSON.parse(localStorage.getItem("user")).token;
    if (!token) return;

    try {
      const response = await createComment(postId, token, body);
      updateComment({
        ...post,
        comments: response.comments,
      });
      setComment("");
    } catch (err) {
      console.log(err);
      return navigate("/err");
    }
  };

  return (
    <div className="px-2 py-4 flex flex-col sm:block">
      <input
        className="border border-gray-400 rounded w-60 mb-3 md:w-80 focus:outline-gray-700 p-2"
        type="text"
        id="comment"
        name="comment"
        value={comment}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <button
        onClick={sendComment}
        className="rounded px-2 py-2 mx-2 bg-indigo-700 text-white hover:bg-indigo-900 hover:shadow-indigo-600/2020 transition"
      >
        Send comment
      </button>
    </div>
  );
};

export default NewComment;
