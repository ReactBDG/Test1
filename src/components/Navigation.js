import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  charactersListSelector,
  // charactersLoadingSelector,
} from "../store/characters/selectors";

export const Navigation = () => {
  const ref = useRef();

  const charactersList = useSelector(charactersListSelector);
  // const charactersLoading = useSelector(charactersLoadingSelector);

  const houseNames = useMemo(() => {
    return Object.keys(
      charactersList.reduce((acc, el) => {
        if (acc[el.houseName] === undefined) {
          if (el.houseName === undefined) {
            acc["Unknown"] = "";
          } else {
            acc[el.houseName] = el.houseName;
          }
        }
        return acc;
      }, {})
    );
  }, [charactersList]);

  useEffect(() => {
    if (ref.current?.clientWidth < ref.current?.scrollWidth) {
      ref.current.classList.add('small')
    }
  }, [charactersList])
  

  return (
    <nav
      ref={ref}
      className={`d-flex  gap-2 `}
    >
      <Link to="/">Home</Link>
      {/* <Link className="mx-3" to="/starks">Starks</Link>
      <Link className="mx-3" to="/targarians">Targarians</Link> */}
      {houseNames.map((el) => (
        <Link to={`/${el.toLowerCase()}`}>{el}</Link>
      ))}
      <Link to="/about-us">About us</Link>
    </nav>
  );
};
