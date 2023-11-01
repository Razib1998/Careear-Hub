import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplicationJob } from "../../Utility/LocalStorage";
import AppliedJobCard from "./AppliedJobCard";
import { AiFillFilter } from "react-icons/ai";


const Applied = () => {

    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([]);
    const handleFilterJobs = filter => {
        if(filter === "all"){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs)
        }
        else if(filter === 'onsite'){
           const onSiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onSiteJobs)
        }
    }

    useEffect( () => {
        const storedJobsId = getStoredApplicationJob();
        if(jobs.length > 0){
             const jobsApplied = [];
             for(const id of storedJobsId){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
             }
            setAppliedJobs(jobsApplied)
            setDisplayJobs(jobsApplied);
             //  console.log(jobs,storedJobsId,jobsApplied)
        }
    },[jobs])
    
    return (
      <div>
        {/* jobs Filter Part */}
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="btn m-1">
            <span><AiFillFilter></AiFillFilter></span>
            Filter
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={()=> handleFilterJobs('all')}>all</a>
            </li>
            <li>
              <a onClick={()=> handleFilterJobs('remote')}>Remote</a>
            </li>
            <li>
              <a onClick={()=> handleFilterJobs('onsite')}>On-field</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          {displayJobs.map((job) => (
            <AppliedJobCard
              job={job}
              key={job.getStoredApplicationJob}
            ></AppliedJobCard>
          ))}
        </div>
      </div>
    );
};

export default Applied;