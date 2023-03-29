import React from "react";
import { useDispatch } from "react-redux";
import { DeleteCardAction } from "../../Redux/slices/CardSlice";

const DeleteCard = ({ buckId, ids, setClick}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // console.log(id);
    dispatch(DeleteCardAction({ buckId, ids }));
    setClick(false)
  };
  return (
    <>
      <input type="button" value="Delete Card" onClick={handleClick} className="btn btn-danger" />
    </>
  );
};

export default DeleteCard;
