import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getList }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const BASE_URL = "http://tutorial-api.fullstack.clarusway.com/tutorials/";

  const newMovie = {
    title: title,
    description: description,
  };

  const postMovie = async () => {
    try {
      await axios.post(BASE_URL, newMovie);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postMovie();
    setTitle("");
    setDescription("");
    getList();
  };

  console.log(title, description);

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add a Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            id="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="desc">
            Description
          </label>
          <input
            className="form-control"
            type="text"
            id="desc"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;
