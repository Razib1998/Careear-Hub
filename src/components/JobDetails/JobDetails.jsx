import { Link, useLoaderData, useParams } from "react-router-dom";
import {
  AiOutlineDollarCircle,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job, id);
  return (
    <div>
      <div className="hero h-[300px] w-[1190px]  bg-base-200 mb-2">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Job Details</h1>

          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-4 mb-2">
        <div className="border-4 md:col-span-3 p-6 rounded-lg">
          <p className="mb-6">
            <span className="font-bold">Job Description:</span>
            {job.job_description}{" "}
          </p>
          <p className="mb-6">
            <span className="font-bold">Job Responsibility:</span>{" "}
            {job.job_responsibility}
          </p>
          <p className="mb-6">
            <span className="font-bold">Educational Requirements:</span> <br />
            <br /> {job.educational_requirements}
          </p>
          <p>
            <span className="font-bold">Experience:</span> <br /> <br />
            {job.experiences}
          </p>
        </div>
        <div>
          <div className="card w-[320px] h-[600px] bg-slate-200 ">
            <div className="card-body">
              <h2 className="card-title">Job Details!</h2> <hr />
              <div className="flex gap-2 items-center">
                <div className="text-xl">
                  <AiOutlineDollarCircle></AiOutlineDollarCircle>
                </div>
                <div>
                  {" "}
                  <span className="font-bold text-lg">Salary:</span>{" "}
                  {job.salary}(Per Month)
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>
                  <FiBookOpen className="text-xl"></FiBookOpen>
                </div>
                <div className="mt-2">
                  <p className="mt-3">
                    <span className="text-lg font-bold">Job Title: </span>
                    {job.job_title}
                  </p>
                </div>
              </div>
              <h2 className="text-xl font-bold mt-6 mb-6">
                Contact Information
              </h2>
              <hr />
              <div className="flex items-center gap-2">
                <div>
                  <AiOutlinePhone className="text-xl"></AiOutlinePhone>
                </div>
                <div>
                  <p>
                    <span className="font-bold text-lg">Phone: </span>
                    {job.contact_information.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="mt-4">
                  <AiOutlineMail className="text-xl"></AiOutlineMail>
                </div>
                <div className="mt-4">
                  <p>
                    <span className="font-bold text-lg">Email: </span>
                    {job.contact_information.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="mt-4">
                  <GrLocation className="text-2xl"></GrLocation>
                </div>
                <div>
                  <p className="mt-4">
                    <span className="font-bold text-lg">Address: </span>
                    {job.contact_information.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link>
            <button className="btn btn-primary w-full ml-6 mt-4">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
