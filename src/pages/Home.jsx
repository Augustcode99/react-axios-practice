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

  const sendEditReq = async (id) => {
    try {
      console.log("editingTutorial:", editingTutorial);
      await axios.put(BASE_URL + id + "/", editingTutorial);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTutorials();
  }, []);

  // console.log(tutorials);

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
