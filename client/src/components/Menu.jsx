import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Menu = ({cat}) => {
   const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  //   const posts= [
  //   {
  //     id: 1,
  //     title: "Post One",
  //     content: "This is the content of post one.",
  //     img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  //   },
  //   {
  //     id: 2,
  //     title: "Post Two",
  //     content: "This is the content of post two.",
  //     img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  //   }
  // ];
  return (
    <div className='menu'>
        <h1>Others posts you may like</h1>
        {posts.map((post) => (
            <div className='post' key={post.id}>
                <img src={post.img} alt={post.title} />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu