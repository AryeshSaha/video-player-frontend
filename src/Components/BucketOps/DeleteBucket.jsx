import React from "react";
import { useDispatch } from "react-redux";
import { DeleteBucketAction } from "../../Redux/slices/BucketSlice";

const DeleteBucket = ({ id, setClick }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // console.log(id);
    dispatch(DeleteBucketAction({ id }));
    setClick(false)
  };

  return (
    <>
      <input type="button" value="Delete Bucket" onClick={handleClick} className="btn btn-danger" />
    </>
  );
};

export default DeleteBucket;
