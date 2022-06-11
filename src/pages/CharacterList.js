import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { charactersListSelector } from "../store/characters/selectors";

export const CharacterList = () => {
  const params = useParams();

  const list = useSelector(charactersListSelector);

  return (
    <>
      <h5>Character</h5>
      {list.map((el, ind) => {
        if (el.houseName === undefined && params.id === "unknown") {
          return <p key={ind}>{el.characterName}</p>;
        } else if (
          (Array.isArray(el.houseName) &&
            el.houseName.join().toLowerCase() === params.id) ||
          el.houseName?.toLowerCase?.() === params.id
        ) {
          return <p key={ind}>{el.characterName}</p>;
        }
        return null;
      })}
    </>
  );
};
