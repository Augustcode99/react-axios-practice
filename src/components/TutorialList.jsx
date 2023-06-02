import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import EditMovie from "./EditMovie";

const TutorialList = ({ tutorials, delMovie, setEditingTutorial }) => {
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials.map((item) => {
            return (
              <tr key={item.id}>
                <td> {item.id} </td>
                <td> {item.title} </td>
                <td> {item.description} </td>
                <td className="text-center text-nowrap">
                  <EditMovie
                    onClick={() => {
                      setEditingTutorial(item);
                    }}
                  />
                  <AiFillDelete
                    onClick={() => {
                      delMovie(item.id);
                    }}
                    size={20}
                    type="button"
                    className="text-warning"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TutorialList;
