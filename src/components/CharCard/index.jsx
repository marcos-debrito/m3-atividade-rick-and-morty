import styles from "./styles.module.css";

export const LiCard = ({ character }) => {
  return (
    <li className={character.status.toLowerCase()}>
      <div>
        {character.name}
        <img src={character.image} />
      </div>
    </li>
  );
};
