/* eslint-disable react/prop-types */
const FeatureJobCard = ({ job }) => {
  const { logo, category_name, availability} = job;
  return (
    <div className="mt-6 mb-6">
      <div className="card w-[210px] bg-slate-200 shadow-xl">
        <figure className="w-[200px] mt-6">
          <img
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category_name}!</h2>
          <p>{availability}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureJobCard;
