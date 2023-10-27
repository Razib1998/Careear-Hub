
const getStoredApplicationJob = () =>{
    const storedJobApplication = localStorage.getItem('job-applications');

    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}



const saveJobApplication = id =>{
const storedAppliedJob = getStoredApplicationJob();
const exists = storedAppliedJob.find(jobId => jobId === id);
if(!exists){
    storedAppliedJob.push(id);
    localStorage.setItem('job-applications',JSON.stringify(storedAppliedJob))
}
}

export {saveJobApplication, getStoredApplicationJob}