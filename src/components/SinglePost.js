import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clickedPost } from "../features/post";

const SinglePost = ({title, text, id}) => {
    const dispatch = useDispatch();

    // set a redux global state of the post we curr want to see.
    const getPostId = (e) => {
        const id = e.target.parentNode.parentNode.id;
        dispatch(clickedPost({id: id}));
    }

    return (
        <article className="p-3 m-12 border border-indigo-400 rounded shadow-indigo-400/80 max-w-xl" id={id}>
            <div className="p-2 border-b-2 bg-indigo-300 w-full h-full rounded">
                <Link className="font-bold hover:underline" to="/post" onClick={(e) => getPostId(e)}>{title}</Link>
            </div>
            <div className="px-2 line-clamp-6">
                <p>{text}</p>
            </div>
        </article>
    )
}

export default SinglePost