/* eslint-disable react/prop-types */
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollarCircle } from "react-icons/ai";

const AppliedJobCard = ({ job }) => {
  const {
    job_title,
    logo,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = job;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="bg-slate-100 shadow-lg p-6 ml-4">
          <img src={logo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
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
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCard;
