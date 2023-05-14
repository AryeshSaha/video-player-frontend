import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdateBucket from "../BucketOps/UpdateBucket";
import DeleteBucket from "../BucketOps/DeleteBucket";

const SingleBucket = ({ bucket }) => {
    
  const [update, setUpdate] = useState(false);

  return (
    <>
      <li key={bucket.id}>
        <Link to={`/${bucket.id}`} className="link">
          <h3 className="rounded-3 bg-secondary text-light border border-light">
            {bucket.name}
          </h3>
        </Link>
        {!update ? (
          <input
            type="button"
            className="btn btn-primary"
            value="Update?"
            onClick={() => setUpdate(!update)}
          />
        ) : (
          <UpdateBucket
            // id={`${bucket.id}`}
            bucket={bucket}
            update={update}
            setUpdate={setUpdate}
          />
        )}
        <DeleteBucket id={`${bucket.id}`} />
      </li>
    </>
  );
};

export default SingleBucket;
