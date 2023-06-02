import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaEdit } from "react-icons/fa";

function EditMovie({
  editingTutorial,
  itemId,
  itemTitle,
  itemDescription,
  edittMovie,
}) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(itemTitle);
  const [description, setDescription] = useState(itemDescription);

  const handleClose = () => {
    setShow(false);
    setTitle("");
    setDescription("");
  };
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    const editedObject = {
      title: title,
      description: description,
    };
    // Perform the necessary actions when submitting the changes
    edittMovie(itemId, editedObject);
    console.log("Title:", title);
    console.log("Description:", description);

    // Reset the inputs and close the modal
    setTitle("");
    setDescription("");
    handleClose();
  };

  return (
    <>
      <FaEdit
        size={20}
        type="button"
        className="me-2 text-warning"
        onClick={handleShow}
      />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title || editingTutorial?.title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              className="form-control"
              value={description || editingTutorial?.description || ""}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditMovie;
