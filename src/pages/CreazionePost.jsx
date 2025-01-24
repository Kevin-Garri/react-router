import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const creazionePost = () => {
  const initialFormData = {
    title: "",
    image: "",
    content: "",
  };

  const navigate = useNavigate();
  const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
  const [formData, setFormData] = useState(initialFormData);

  //input
  const modificaInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //nuovo post
  const gestioneNuovoPost = (e) => {
    e.preventDefault();
    const newPost = { ...formData };
    axios.post(`${baseApiUrl}/posts`, newPost).then((res) => {
      setFormData(initialFormData);
      navigate("/posts");
    });
  };

  return (
    <>
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <h1 className="my-3">NUOVO POST</h1>
            <div className="container my-5">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h2>Aggiungi un nuovo post</h2>
                  </div>
                  <form action="" onSubmit={gestioneNuovoPost}>
                    <div className="mb-3">
                      <label htmlFor="title">Titolo</label>
                      <input
                        id="title"
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Titolo"
                        value={formData.title}
                        onChange={modificaInput}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image">URL immagine</label>
                      <input
                        id="image"
                        type="text"
                        name="image"
                        className="form-control"
                        placeholder="URL immagine"
                        value={formData.image}
                        onChange={modificaInput}
                      />
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-success" type="submit">
                        Aggiungi Post
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default creazionePost