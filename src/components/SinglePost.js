const SinglePost = ({title, text}) => {
    return (
        <article className="p-3 m-12 border border-indigo-400 rounded shadow-indigo-400/80 max-w-xl">
            <div className="p-2 border-b-2 bg-indigo-300 w-full h-full rounded">
                <h1 className="font-bold">{title}</h1>
            </div>
            <div className="px-2 line-clamp-6">
                <p>{text}</p>
            </div>
        </article>
    )
}

export default SinglePost