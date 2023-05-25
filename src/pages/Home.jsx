import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { useEffect, useState } from "react";

const Home = () => {
  const BASE_URL = "http://tutorial-api.fullstack.clarusway.com/tutorials/";

  const [tutorials, setTutorials] = useState([]);

  const getTutorials = async () => {
    console.log("Fetching tutorials...");
    const { data } = await axios(BASE_URL);
    setTutorials(data);
  };

  useEffect(() => {
    getTutorials();
  }, []);

  console.log(tutorials);

  return (
    <>
      <AddTutorial getList={getTutorials} />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
