import styles from "./styles.module.css"
import { LiCard } from "../CharCard/index.jsx";

export const SectionCharacters = ({ array }) => {

  const newArray = [...array]

  return (
    <>
      <ul>
        {newArray.map((character) => (
          <LiCard key={character.id} character={character}/>
        ))}
      </ul>
    </>
  );
};
