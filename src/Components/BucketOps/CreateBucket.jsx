import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateBucketAction } from "../../Redux/slices/BucketSlice";

const CreateBucket = ({setClick}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleClick = () => {
    dispatch(CreateBucketAction({ name }));
    setName("");
    setClick(false)
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="name" className="form-label text-light">
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
      <input type="button" value="Create" onClick={handleClick} className="btn btn-success" />
    </>
  );
};

export default CreateBucket;
