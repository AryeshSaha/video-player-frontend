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
          <h3 className="rounded-3 bg-gray-500 hover:bg-gray-600 text-light border border-light text-xl py-1">
            {bucket.name}
          </h3>
        </Link>
        {!update ? (
          <input
            type="button"
            className="btn bg-none text-white outline outline-1 outline-blue-600 hover:bg-blue-600 m-3"
            value="Update?"
            onClick={() => setUpdate(!update)}
          />
        ) : (
          <UpdateBucket bucket={bucket} update={update} setUpdate={setUpdate} />
        )}
        <DeleteBucket id={bucket.id} />
      </li>
    </>
  );
};

export default Buckets;
