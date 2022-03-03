import { useSelector } from "react-redux";

const Comment = ({ author, text }) => {
  const user = useSelector((state) => state.user.value);

  return (
    <div className="py-2 border-b">
      {user.username === author ? (
        <h3 className="text-blue-800">
          <b>{author}</b>
        </h3>
      ) : (
        <h3 className="text-blue-600">{author}</h3>
      )}
      <p>{text}</p>
    </div>
  );
};

export default Comment;
