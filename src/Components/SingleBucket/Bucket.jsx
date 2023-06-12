import React from "react";
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import SingleBucket from "./SingleBucket";

const Bucket = () => {
  const { buckId } = useParams();

  return (
    <>
      <Navbar />
      <h1 className="m-4">Cards</h1>
      <div className="container border rounded-3 bg-dark">
        <div className="row text-center justify-content-center align-middle">
          <SingleBucket buckId={buckId} />
        </div>
      </div>
    </>
  );
};

export default Bucket;
