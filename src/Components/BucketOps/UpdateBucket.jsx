import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateBucketAction } from "../../Redux/slices/BucketSlice";

const UpdateBucket = ({id, update, setUpdate, setClick}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleClick = () => {
    dispatch(UpdateBucketAction({id, name}));
    setClick(false)
    setName("");
    setUpdate(!update)
  };

  

  return (
    <>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <input type="button" value="Update Bucket" onClick={handleClick} className="btn btn-primary" />
    </>
  );
};

export default UpdateBucket;
