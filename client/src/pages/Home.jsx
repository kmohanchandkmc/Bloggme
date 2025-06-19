import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";


const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

   const [expandedPosts, setExpandedPosts] = useState({});

  const toggleExpand = (postId) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  // const posts= [
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
   const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
     <div className="home">
      <div className="posts">
        {Array.isArray(posts) &&
          posts.map((post) => {
            const isExpanded = expandedPosts[post.id];

            return (
              <div className="post" key={post.id}>
                <div className="img">
                  <img src={`../upload/${post.img}`} alt="" />
                </div>
                <div className="content">
                  <Link className="link" to={`/post/${post.id}`}>
                    <h1>{post.title}</h1>
                  </Link>
                  <p>
                    {isExpanded
                      ? getText(post.content)
                      : `${getText(post.content).slice(0, 150)}...`}
                  </p>
                  <button onClick={() => toggleExpand(post.id)}>
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  )
}


export default Home