import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"

import PostsCard from "./PostsCard"

export default function PostsListUser() {
    const { posts } = useContext(GlobalContext)


    return (
        <>
            {posts.map((post) => (
                <PostsCard key={post.id} post={post} />
            ))}
        </>
    )
}