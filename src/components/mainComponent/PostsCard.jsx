export default function PostsCard(props) {
    const { post } = props
    // console.log(post);


    return (
        <>
            <div className="card" >
                <img src={post.image} className="card-img-top" alt={post.title} />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <p className="card-text">{post.tags}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div >
        </>
    )
}