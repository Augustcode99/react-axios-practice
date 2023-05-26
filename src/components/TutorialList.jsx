import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TutorialList = ({ tutorials, delMovie }) => {
  // const tutorials = [
  //   { id: 1, title: "harry potter", description: "fantasy" },
  //   { id: 2, title: "Jurrasic Park", description: "science fiction" },
  // ];

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
              <tr>
                <td> {item.id} </td>
                <td> {item.title} </td>
                <td> {item.description} </td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                  />
                  <AiFillDelete
                    onClick={() => {
                      delMovie(item.id);
                      // setTimeout(getList, 50);
                      // getList();
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
