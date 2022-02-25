import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate } from "../../helpers/formatDate";
import { getSpecificPost } from "../../services/posts";

import Comment from "../Comment";

const PostDetail = () => {
  const [loading, setLoading] = useState(false);
  const [currPost, setCurrPost] = useState({ comments: [] });
  const id = useSelector((state) => state.post.value.id);
  const username = useSelector((state) => state.user.value.username);

  useEffect(() => {
    setLoading(true);
    getSpecificPost(id)
      .then((res) => {
        const post = res.post;
        const comments = res.comments;

        const date = formatDate(post.updatedAt);

        setCurrPost({
          author: post.author.username,
          title: post.title,
          text: post.text,
          created: date,
          comments: comments,
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Check the posts state, if there are posts shows them, else, show there are no posts.
  return (
    <article className="flex flex-col items-center p-6 m-12 border border-indigo-400 rounded shadow-indigo-400">
      <div className="flex flex-col items-center w-full">
        <div className="flex pb-3 justify-center border-b border-b-gray-700 w-full">
          {loading ? (
            <h2 className="text-2xl animate-pulse">Loading...</h2>
          ) : (
            <h2 className="text-2xl">{currPost.title}</h2>
          )}
        </div>
        <div className="flex justify-between text-gray-700 w-full p-3">
          {loading ? (
            <h2 className="text-2xl animate-pulse">
              Loading...
            </h2>
          ) : (
            <>
              <p className="px-6">{currPost.author}</p>
              <p className="px-6">{currPost.created}</p>
            </>
          )}
        </div>
      </div>
      <div className="p-3">
        <p className="text-sm md:text-base">{currPost.text}</p>
      </div>
      <div>
        {currPost.comments.map((comment) => {
          return (
            <Comment author={comment.author.username} text={comment.text} />
          );
        })}
        {username === "" ? (
          <div className="pt-6">
            <Link
              to="/login"
              className="rounded px-2 py-2 mx-2 bg-indigo-700 text-white hover:bg-indigo-900 hover:shadow-indigo-600/2020 transition"
            >
              Log in
            </Link>
            Or
            <Link
              to="/register"
              className="rounded px-2 py-2 mx-2 bg-indigo-700 text-white hover:bg-indigo-900 hover:shadow-indigo-600/2020 transition"
            >
              Register
            </Link>
            <p className="pt-3">To see or create comments</p>
          </div>
        ) : (
          <p>Create your comment</p>
        )}
      </div>
    </article>
  );
};

export default PostDetail;
