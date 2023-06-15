import React from "react";
import { useDispatch } from "react-redux";
import { DeleteCardAction } from "../../Redux/slices/CardSlice";

const DeleteCard = ({ buckId, ids }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // console.log(id);
    dispatch(DeleteCardAction({ buckId, ids }));
  };
  return (
    <>
      <input
        type="button"
        value="Delete Card"
        onClick={handleClick}
        className="btn bg-none text-white outline outline-1 outline-red-700 hover:bg-red-700 m-3"
      />
    </>
  );
};

export default DeleteCard;
