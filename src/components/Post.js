import './post.css'
function Post({ title, body, userId, id }) {
    return (
        <div className="post">
            <h1>{title}</h1>
            <p>{body}</p>
            <p>USERID: {userId}</p>
            <p>{id}</p>
        </div>
    )
}

export default Post;