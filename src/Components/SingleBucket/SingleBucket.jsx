import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleCard from "../SingleCard/SingleCard";
import CreateCard from "../CardOps/CreateCard";
import DeleteCard from "../CardOps/DeleteCard";
import { FetchSingleBucketAction } from "../../Redux/slices/BucketSlice";

const SingleBucket = ({ buckId }) => {
  const [ids, setIds] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchSingleBucketAction(buckId));
  }, [dispatch, buckId]);

  const cards = useSelector(
    (state) => state.bucket?.singleBucketInfo?.bucket?.Cards
  );
  // console.log("Cards: ", cards);
  return (
    <>
      <div className="col-6">
        <ul>
          {cards?.map((card) => (
            <SingleCard
              key={card._id}
              ids={ids}
              setIds={setIds}
              buckId={buckId}
              card={card}
            />
          ))}
          <CreateCard buckId={buckId} />
          <DeleteCard buckId={buckId} ids={ids} />
        </ul>
      </div>
    </>
  );
};

export default SingleBucket;
