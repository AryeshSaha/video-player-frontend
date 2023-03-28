import React from "react";
import { useDispatch } from "react-redux";
import { DeleteBucketAction } from "../../Redux/slices/BucketSlice";

const DeleteBucket = ({ id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // console.log(id);
    dispatch(DeleteBucketAction({ id }));
  };

  return (
    <>
      <input type="button" value="Delete Bucket" onClick={handleClick} className="btn btn-danger" />
    </>
  );
};

export default DeleteBucket;
