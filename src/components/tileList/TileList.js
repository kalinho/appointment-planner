import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = ({info}) => {

  

  return (
    <div>
      {info.map((obj, index) => (
        <Tile key={index} item={obj} />
      ))}
    </div>
  );
};
