/* eslint-disable react/prop-types */

import { GrLocation } from "react-icons/gr";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;


  return (
    <div className="mt-8 mb-8">
      <div className="card card-compact w-[500px] h-[320px] bg-slate-300 shadow-xl">
        <figure className="mt-4">
          <img src={logo} alt="Jobs" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{job_title}</h2>
          <p className="text-lg font-semibold">{company_name}</p>
          <div className="flex gap-6">
            <button className=" border border-[#7E90FE] px-5 py-2 rounded-lg font-extrabold text-lg text-[#7E90FE] ">
              {remote_or_onsite}
            </button>
            <button className=" border border-[#7E90FE] px-5 py-2 rounded-lg font-extrabold text-lg text-[#7E90FE] ">
              {job_type}
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <GrLocation className="text-xl"></GrLocation>
              <p className="text-lg font-semibold">{location}</p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineDollarCircle className="text-xl"></AiOutlineDollarCircle>
              <p className="text-lg font-semibold"> Salary: {salary}</p>
            </div>
          </div>
          <div className="card-actions">
            <Link to={`/job/${job.id}`}>
              <button className="btn btn-primary mt-2">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
