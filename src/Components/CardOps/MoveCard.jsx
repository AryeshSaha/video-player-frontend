import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchBucketsAction } from "../../Redux/slices/BucketSlice";
import { MoveCardAction } from "../../Redux/slices/CardSlice";

const MoveCard = ({ cardId, oldBuckId }) => {
  const dispatch = useDispatch();
  const [newBuckId, setNewBuckId] = useState(null);

  const handleClick = () => {
    dispatch(MoveCardAction({ oldBuckId, newBuckId, cardId }))
  };
  useEffect(() => {
    dispatch(FetchBucketsAction());
  }, [dispatch]);

  const buckets = useSelector((state) => state.bucket?.bucketInfo?.buckets);

  return (
    <>

      <select className="form-select" onChange={(e) => setNewBuckId(e.target.value)} >
        <option defaultValue={newBuckId}>---select---</option>
        {
          buckets?.map((bucket) => bucket.id !== oldBuckId && (
            <option key={bucket.id} value={bucket.id}>{bucket.name}</option>
          ))
        }
      </select>

      <button
        type="button"
        className="btn bg-none text-black outline outline-1 outline-cyan-400 hover:bg-cyan-400 m-3"
        onClick={handleClick}
      >
        Move
      </button>
    </>
  );
};

export default MoveCard;
