import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdateBucket from "../../Components/BucketOps/UpdateBucket";
import DeleteBucket from "../../Components/BucketOps/DeleteBucket";

const Buckets = ({ bucket }) => {
    
  const [update, setUpdate] = useState(false);

  return (
    <>
      <li>
        <Link to={`/buck/${bucket.id}`} className="link">
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
            bucket={bucket}
            update={update}
            setUpdate={setUpdate}
          />
        )}
        <DeleteBucket id={bucket.id} />
      </li>
    </>
  );
};

export default Buckets;
