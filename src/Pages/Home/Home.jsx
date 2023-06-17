import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateBucket from "../../Components/BucketOps/CreateBucket";
import Navbar from "../../Components/Navbar/Navbar";
import { FetchBucketsAction } from "../../Redux/slices/BucketSlice";
import Buckets from "../Buckets/Buckets";
import { ScaleLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchBucketsAction());
  }, [dispatch]);

  const isLoading = useSelector((state) => state.bucket?.isLoading);

  const buckets = useSelector((state) => state.bucket?.bucketInfo?.buckets);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center vh-100">
          <ScaleLoader
            color={"#1e3a8a"}
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Navbar heading={"Video Player"} />
          <h1 className="font-semibold m-4 text-2xl">Albums</h1>
          <div className="container bg-dark rounded-3">
            <div className="row text-center justify-content-center align-middle">
              <div className="col-6">
                <ul>
                  {buckets &&
                    buckets.map((bucket) => {
                      return <Buckets key={bucket.id} bucket={bucket} />;
                    })}
                </ul>
                <CreateBucket />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
