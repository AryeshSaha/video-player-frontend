import React from "react";
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import SingleBucket from "./SingleBucket";

const Bucket = () => {
  const { buckId } = useParams();

  return (
    <>
      <Navbar heading={"Back"} />
      <h1 className="font-semibold text-2xl py-1 m-4">Videos</h1>
      <div className="container border rounded-3 bg-dark">
        <div className="row text-center justify-content-center align-middle">
          <SingleBucket buckId={buckId} />
        </div>
      </div>
    </>
  );
};

export default Bucket;
