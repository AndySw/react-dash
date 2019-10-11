import React, { Component } from 'react'



function PostsItems (props) {
  const post = props.post


  return (
    <tr key={post.id.toString()}>
      <td>{post.id}</td>
      <td>{post.userId}</td>
    </tr>
  )
}

class Posts extends Component {
     state = {
      posts: []
    }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/user/1/posts')    
      .then(res => res.json())
      .then((data) => {
        this.setState({ posts: data })
        console.log("length : " + this.state.posts.length)
      })
      .catch(console.log)
  }
}

export default Posts
