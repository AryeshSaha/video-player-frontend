import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateCardAction } from "../../Redux/slices/CardSlice";

const CreateCard = ({ setClick, id }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleClick = () => {
    dispatch(CreateCardAction({ id, title, link }));
    setTitle("");
    setLink("");
    setClick(false)
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
      <input type="button" value="Create Card" onClick={handleClick} className="btn btn-success" />
    </>
  );
};

export default CreateCard;
