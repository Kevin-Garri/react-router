import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const ListaPost = () => {
  const [posts, setPosts] = useState(null);
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

  //fetch dei post
  const fetchPosts = () => {
    axios
      .get(`${baseApiUrl}/posts`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  //use effect di fetch post
  useEffect(() => {
    fetchPosts();
  }, []);

  return (

    <>
      <h1>Lista Post</h1>
    </>
  )
}

export default ListaPost
