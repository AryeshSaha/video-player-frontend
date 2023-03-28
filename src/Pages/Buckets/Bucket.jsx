import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CreateCard from "../../Components/CardOps/CreateCard";
import DeleteCard from "../../Components/CardOps/DeleteCard";
import MoveCard from "../../Components/CardOps/MoveCard";
import UpdateCard from "../../Components/CardOps/UpdateCard";
import Modal from "../../Components/Modal/Modal";
import Navbar from "../../Components/Navbar/Navbar";
import { FetchSingleBucketAction } from "../../Redux/slices/BucketSlice";

const Bucket = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log("id: ", id);

  useEffect(() => {
    dispatch(FetchSingleBucketAction(id));
  }, [dispatch, id]);

  const cards = useSelector(
    (state) => state.bucket?.singleBucketInfo?.bucket?.Card
  );
  // console.log("Cards: ", cards);

  const [update, setUpdate] = useState(false);

  const [ids, setIds] = useState([]);

  return (
    <>
      <Navbar />
      <h1 className="m-4">Cards</h1>
      <div className="container border rounded-3 bg-dark">
        <div className="row text-center justify-content-center align-middle">
          <div className="col-12">
            <ul>
              {cards &&
                cards.map((card) => (
                  <li key={card.id}>
                    <div
                      className="card m-auto my-5"
                      style={{ width: "30rem" }}
                    >
                      <div className="card-body">
                        <label htmlFor="delete" className="fw-bold float-end">
                          Select
                          <input
                            type="checkbox"
                            name="delete"
                            id="delete"
                            value={card.id}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setIds((prev) => [...prev, card.id]);
                              } else {
                                setIds(ids.slice(0, -1));
                              }
                              console.log("ids: ", ids);
                            }}
                            className="m-2"
                          />
                        </label>
                        <br />
                        <br />
                        <Link
                          to={`${card.link}`}
                          target="_blank"
                          className="card-link link"
                          data-bs-toggle="modal"
                          data-bs-target="#example1Modal"
                        >
                          <h4 className="card-title">{card.title}</h4>
                          <p>{card.link}</p>
                        </Link>
                        <Modal cardLink={card.link} cardTitle={card.title} />
                        {!update ? (
                          <input
                            type="button"
                            className="btn btn-primary"
                            value="Update?"
                            onClick={() => setUpdate(!update)}
                          />
                        ) : (
                          <UpdateCard
                            id={card.id}
                            buckId={id}
                            title={card.title}
                            link={card.link}
                          />
                        )}
                        <MoveCard cardId={card.id} oldBuckId={id} />
                      </div>
                    </div>
                  </li>
                ))}
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
