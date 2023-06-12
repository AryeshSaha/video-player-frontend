import React, { useState } from "react";
import Modal from "../Modal/Modal";
import UpdateCard from "../CardOps/UpdateCard";
import MoveCard from "../CardOps/MoveCard";

const SingleCard = ({ ids, setIds, buckId, card }) => {
  const [update, setUpdate] = useState(false);

  return (
    <>
      <li>
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
                }}
                className="m-2"
              />
            </label>
            <br />
            <br />
            <div
              className="card-link link"
              data-bs-toggle="modal"
              data-bs-target={`#exampleModal${card.id}`}
              style={{ cursor: "pointer" }}
            >
              <h4 className="card-title">{card.title}</h4>
              <p>{card.link}</p>
            </div>
            <Modal card={card} />
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
                buckId={buckId}
                title={card.title}
                link={card.link}
                update={update}
                setUpdate={setUpdate}
              />
            )}
            <MoveCard
              cardId={card.id}
              oldBuckId={buckId}
            />
          </div>
        </div>
      </li>
    </>
  );
};

export default SingleCard;
