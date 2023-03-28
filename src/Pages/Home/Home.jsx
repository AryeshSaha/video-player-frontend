import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CreateBucket from "../../Components/BucketOps/CreateBucket";
import DeleteBucket from "../../Components/BucketOps/DeleteBucket";
import UpdateBucket from "../../Components/BucketOps/UpdateBucket";
import Navbar from "../../Components/Navbar/Navbar";
import { FetchBucketsAction } from "../../Redux/slices/BucketSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchBucketsAction());
  }, [dispatch]);

  const buckets = useSelector((state) => state.bucket?.bucketInfo?.buckets);

  const [update, setUpdate] = useState(false);

  return (
    <>
      <Navbar />
      <h1 className="m-4">Buckets</h1>
      <div className="container bg-dark rounded-3">
        <div className="row text-center justify-content-center align-middle">
          <div className="col-6">
            <ul>
              {buckets &&
                buckets.map((bucket) => (
                  <li key={bucket.id} >
                    <Link to={`/${bucket.id}`} className="link"><h3 className="rounded-3 bg-secondary text-light border border-light">{bucket.name}</h3></Link>
                    {!update ? (
                      <input
                        type="button"
                        className="btn btn-primary"
                        value="Update?"
                        onClick={() => setUpdate(!update)}
                      />
                    ) : (
                      <UpdateBucket id={`${bucket.id}`} update={update} setUpdate={setUpdate} />
                    )}
                    <DeleteBucket id={`${bucket.id}`} />
                  </li>
                ))}
            </ul>
            <CreateBucket />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
