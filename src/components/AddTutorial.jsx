import { useState } from "react";

const AddTutorial = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add a Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          >
            Title
          </label>
          <input className="form-control" type="text" id="title" />
        </div>
        <div className="mb-3">
          <label
            className="form-label"
            htmlFor="desc"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          >
            Description
          </label>
          <input className="form-control" type="text" id="desc" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;
