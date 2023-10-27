import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Feature = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])


    return (
      <div>
        <div className="text-center">
          <h2 className="text-5xl font-bold">Featured Jobs: {jobs.length}</h2>
          <p className="text-xl mt-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {jobs.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
      </div>
    );
};

export default Feature;