import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateBucketAction } from "../../Redux/slices/BucketSlice";

const UpdateBucket = ({bucket, update, setUpdate}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleClick = () => {
    dispatch(UpdateBucketAction({id: bucket.id, name}));
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
          value={name ? name : bucket.name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <input type="button" value="Update Bucket" onClick={handleClick} className="btn bg-none text-white outline outline-1 outline-blue-400 hover:bg-blue-400 m-3" />
    </>
  );
};

export default UpdateBucket;
