function Modal({ sendEditReq, editingTutorial, setEditingTutorial }) {
  return (
    <div className="modal" tabIndex="-1" id="editMovie" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Item</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form action="">
              <div className="form-group">
                <label htmlFor="edTital">New Title</label>
                <input
                  type="text"
                  placeholder="edit title"
                  id="edTital"
                  className="form-control mb-3"
                  onChange={(e) => {
                    setEditingTutorial(
                      editingTutorial
                        ? {
                            ...editingTutorial,
                            title: e.target.value,
                          }
                        : { title: e.target.value }
                    );
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="edDesc">New Description</label>
                <input
                  type="text"
                  placeholder="edit description"
                  id="edDesc"
                  className="form-control"
                  value={editingTutorial ? editingTutorial.description : ""}
                  onChange={(e) => {
                    setEditingTutorial(
                      editingTutorial
                        ? {
                            ...editingTutorial,
                            description: e.target.value,
                          }
                        : { description: e.target.value }
                    );
                  }}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={sendEditReq}
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
