const Banner = () => {
  return (
    <div className="mb-6">
      <div className="hero w-[1100px]  bg-base-200">
        <div className="hero-content  flex-col justify-between lg:flex-row-reverse">
          <img src={"user.png"} className="max-w-sm rounded-lg shadow-xl ml-12" />
          <div className="mr-36">
            <h1 className="text-5xl font-bold">
              One Step <br />
              Closer To Your <br />{" "}
              <span className="text-[#9873FF]">Dream Job!</span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the <br /> information
              you need. Its your future. Come find it. Manage all <br /> your job
              application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
