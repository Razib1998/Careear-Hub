import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplicationJob } from "../../Utility/LocalStorage";
import AppliedJobCard from "./AppliedJobCard";


const Applied = () => {

    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
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
             //  console.log(jobs,storedJobsId,jobsApplied)
        }
    },[])
    
    return (
        <div>
            <div className="flex flex-col gap-4">
                {
                    appliedJobs.map(job => <AppliedJobCard job={job} key={job.getStoredApplicationJob}></AppliedJobCard>)
                }
            </div>
        </div>
    );
};

export default Applied;