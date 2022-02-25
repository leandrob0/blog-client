const Comment = ({author, text}) => {
    return (
        <div className="py-2 border-b">
            <h3 className="text-blue-600"><em>{author}</em></h3>
            <p>{text}</p>
        </div>
    )
}

export default Comment;