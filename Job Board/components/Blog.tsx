import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface BlogPost {
  id: number
  title: string
  content: string
  date: string
}

interface BlogProps extends RouteComponentProps<{ postId: string }> {
  blogPosts: BlogPost[]
}

const Blog: React.FC<BlogProps> = ({ blogPosts, match }) => {
  const postId = parseInt(match.params.postId, 10)
  const post = blogPosts.find((blogPost) => blogPost.id === postId)

  if (!post) {
    return <div>Blog post not found</div>
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.date}</p>
      <div>{post.content}</div>
    </div>
  )
}

export default Blog
