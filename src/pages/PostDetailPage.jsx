import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const PostDetail = () => {
  const { id } = useParams();
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();

  //fetch dei post
  const fetchPosts = () => {
    axios
      .get(`${baseApiUrl}/posts/${id}`)
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
  }, [id])

  //delete eliminazione
  const eliminazione = () => {
    axios
      .delete(`${baseApiUrl}/posts/${id}`)
      .then(() => {
        navigate("/posts");
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  return (
    <>
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <h1>{posts?.name}</h1>
            <img className="my-3 img-fluid" src={posts?.image} alt={posts?.title} />
            <p>{posts?.content}</p>
            <p>
              Tags: <strong>{posts?.tags.join(", ")}</strong>
            </p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-success" onClick={() => navigate(-1)}>
                Torna
              </button>
              <button className="btn btn-danger" onClick={eliminazione}>
                Elimina
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetail