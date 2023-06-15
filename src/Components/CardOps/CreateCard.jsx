import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateCardAction } from "../../Redux/slices/CardSlice";

const CreateCard = ({ buckId }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleClick = () => {
    dispatch(CreateCardAction({ buckId, title, link }));
    setTitle("");
    setLink("");
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="title" className="form-label text-light">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="link" className="form-label text-light">
          Link:
        </label>
        <input
          type="text"
          className="form-control"
          id="link"
          name="link"
          onChange={(e) => setLink(e.target.value)}
          value={link}
        />
      </div>
      <input type="button" value="Create Card" onClick={handleClick} className="btn bg-none text-white outline outline-1 outline-green-500 hover:bg-green-500 m-3" />
    </>
  );
};

export default CreateCard;
