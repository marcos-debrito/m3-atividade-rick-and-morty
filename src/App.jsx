import { useState, useEffect } from "react";
import axios from "axios";
import { SectionCharacters } from "./components/Characters";

export const App = () => {
  const [characterList, setCharacterList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 /* characterList -> array com todos os personagens do rick and morty */
  useEffect(() => {
    const getData = async () => {
      try {
        console.log("in");
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/"
        );
        setCharacterList(response.data.results)
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (<>
    {isLoading ?
    <div>Loading...</div> :
    <SectionCharacters array = {characterList} /> }
    </>);
};
