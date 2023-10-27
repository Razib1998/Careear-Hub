import { useEffect, useState } from "react";
import FeatureJobCard from "../FeatureJobCard/FeatureJobCard";


const CategoryList = () => {

  const [featureJob, setFeatureJob] = useState([]);

  useEffect(() => {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setFeatureJob(data))
  },[])
    return (
      <div>
        <div className="text-center">
          <h2 className="text-5xl font-bold">Job Category List</h2>
          <p className="text-xl mt-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-4 gap-1">
           {
            featureJob.map(job => <FeatureJobCard job={job} key={job.id}></FeatureJobCard>)
           }
        </div>
      </div>
    );
};

export default CategoryList;