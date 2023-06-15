import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateBucketAction } from "../../Redux/slices/BucketSlice";

const CreateBucket = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleClick = () => {
    dispatch(CreateBucketAction({ name }));
    setName("");
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
      <input
        type="button"
        value="Create"
        onClick={handleClick}
        className="btn bg-none text-white outline outline-1 outline-green-500 hover:bg-green-500 m-3"
      />
    </>
  );
};

export default CreateBucket;
