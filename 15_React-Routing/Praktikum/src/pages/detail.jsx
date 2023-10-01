/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import React from "react";

import { useTitle } from "../utils/hooks/customHooks";

export default function Detail() {
  useTitle("Detail Data");
  const { id} = useParams();

  return (
    <div>
      <h2>Detail Page</h2>
      <p>ID: {id}</p>
    </div>
  );
}
