import React, { useState } from "react";
import Modal from "../Modal/Modal";
import UpdateCard from "../CardOps/UpdateCard";
import MoveCard from "../CardOps/MoveCard";

const SingleCard = ({ ids, setIds, buckId, card }) => {
  const [update, setUpdate] = useState(false);

  return (
    <>
      <li>
        <div className="card m-auto my-5 bg-gray-300" style={{ width: "30rem" }}>
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
            >
              <h4 className="card-title text-slate-950 text-lg">{card.title}</h4>
              <p className="text-teal-700 hover:bg-gray-400 rounded-md" style={{ cursor: "pointer" }}>{card.link}</p>
            </div>
            <Modal card={card} />
            {!update ? (
              <input
                type="button"
                className="btn bg-none text-black outline outline-1 outline-blue-600 hover:bg-blue-600 hover:text-white m-3"
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
