const Comment = ({author, text}) => {
    return (
        <div>
            <h3>{author}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Comment;