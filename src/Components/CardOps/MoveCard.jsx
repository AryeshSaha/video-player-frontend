import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchBucketsAction } from '../../Redux/slices/BucketSlice';
import { MoveCardAction } from '../../Redux/slices/CardSlice';

const MoveCard = ({cardId, oldBuckId, setClick}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchBucketsAction());
  }, [dispatch]);

  const handleClick = (newBuckId) => {
    dispatch(MoveCardAction({cardId, oldBuckId, newBuckId}))
    setClick(false)
  }

  const buckets = useSelector((state) => state.bucket?.bucketInfo?.buckets);

  return (
    <>
      <button
        type="button"
        className="btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Move
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Bucket List
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            {buckets &&
                buckets.map((bucket) => (
                  <button key={bucket.id} onClick={() => handleClick(bucket.id)} className="btn btn-secondary" >{bucket.name}</button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoveCard