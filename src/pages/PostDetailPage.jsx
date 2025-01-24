import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const PostDetail = () => {
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();

  //fetch dei post
  const fetchPosts = () => {
    axios
      .get(`${baseApiUrl}/posts`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching Posts:", error);
      });
  };

  //use effect di fetch post
  useEffect(() => {
    fetchPosts()
  }, [])

  return
}

export default PostDetail