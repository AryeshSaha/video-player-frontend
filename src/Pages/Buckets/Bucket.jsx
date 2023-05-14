import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CreateCard from "../../Components/CardOps/CreateCard";
import DeleteCard from "../../Components/CardOps/DeleteCard";
import Navbar from "../../Components/Navbar/Navbar";
import { FetchSingleBucketAction } from "../../Redux/slices/BucketSlice";
import SingleCard from "../../Components/SingleCard/SingleCard";

const Bucket = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log("id: ", id);

  useEffect(() => {
    dispatch(FetchSingleBucketAction(id));
  }, [dispatch, id]);

  const [ids, setIds] = useState([]);

  const cards = useSelector(
    (state) => state.bucket?.singleBucketInfo?.bucket?.Card
  );
  // console.log("Cards: ", cards);

  return (
    <>
      <Navbar />
      <h1 className="m-4">Cards</h1>
      <div className="container border rounded-3 bg-dark">
        <div className="row text-center justify-content-center align-middle">
          <div className="col-6">
            <ul>
              {cards &&
                cards.map((card) => {
                  return (
                    <SingleCard ids={ids} setIds={setIds} id={id} card={card} />
                  );
                })}
              <CreateCard id={id} />
              <DeleteCard buckId={id} ids={ids} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bucket;
