import React from "react";

const Modal = ({ card }) => {
  return (
    <>
      <div
        className="modal fade"
        id={`exampleModal${card.id}`}
        tabIndex="-1"
        aria-labelledby={`exampleModalLabel${card.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`exampleModalLabel${card.id}`}>
                {card.title}
              </h5>
            </div>
            <div className="modal-body flex justify-center">
              <iframe
                width="560"
                height="315"
                src={card.link}
                title={card.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary text-black"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
