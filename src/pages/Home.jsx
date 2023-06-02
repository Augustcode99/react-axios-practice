import axios from "axios";
import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  const BASE_URL = "http://tutorial-api.fullstack.clarusway.com/tutorials/";

  const [tutorials, setTutorials] = useState([]);
  const [editingTutorial, setEditingTutorial] = useState(null);

  const getTutorials = async () => {
    console.log("Fetching tutorials...");
    const { data } = await axios(BASE_URL);
    setTutorials(data);
  };

  const deleteMovie = async (id) => {
    console.log("deleting a movie");
    try {
      await axios.delete(BASE_URL + id + "/");
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  useEffect(() => {
    getTutorials();
  }, []);

  console.log("editingTutorial is:", editingTutorial);

  return (
    <>
      <AddTutorial getList={getTutorials} />
      <TutorialList
        tutorials={tutorials}
        delMovie={deleteMovie}
        setEditingTutorial={setEditingTutorial}
      />
    </>
  );
};

export default Home;
