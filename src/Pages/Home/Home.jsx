import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateBucket from "../../Components/BucketOps/CreateBucket";
import Navbar from "../../Components/Navbar/Navbar";
import { FetchBucketsAction } from "../../Redux/slices/BucketSlice";
import SingleBucket from "../../Components/SingleBucket/SingleBucket";

const Home = () => {
  const dispatch = useDispatch();

  // const [bucks, setBucks] = useState([]);

  useEffect(() => {
    dispatch(FetchBucketsAction());
  }, [dispatch]);

  const buckets = useSelector((state) => state.bucket?.bucketInfo?.buckets);

  return (
    <>
      <Navbar />
      <h1 className="m-4">Buckets</h1>
      <div className="container bg-dark rounded-3">
        <div className="row text-center justify-content-center align-middle">
          <div className="col-6">
            <ul>
              {buckets &&
                buckets.map((bucket) => {
                  return <SingleBucket bucket={bucket} />;
                })}
            </ul>
            <CreateBucket />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
