import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import UpdateCard from "../CardOps/UpdateCard";
import MoveCard from "../CardOps/MoveCard";

const SingleCard = ({ ids, setIds, id, card }) => {
  const [update, setUpdate] = useState(false);

  return (
    <>
      <li key={card.id}>
        <div className="card m-auto my-5" style={{ width: "30rem" }}>
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
                update={update}
                setUpdate={setUpdate}
              />
            )}
            <MoveCard cardId={card.id} oldBuckId={id} />
          </div>
        </div>
      </li>
    </>
  );
};

export default SingleCard;
