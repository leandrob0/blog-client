const Comment = ({author, text}) => {
    return (
        <div>
            <input
            className="border border-gray-400 rounded w-60 md:w-80 focus:outline-gray-700 p-1"
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
          />
        </div>
    )
}

export default Comment;