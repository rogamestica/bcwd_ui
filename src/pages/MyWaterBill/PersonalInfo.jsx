import Table from '../../components/Table';
import profile from '../../static/svg/profile.svg';

const PersonalInfo = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-5">Personal Information</h2>
      <div className="mt-5 mb-3 d-flex justify-content-center">
        <img
          className="rounded-circle"
          src={profile}
          alt="profile"
          width="120"
          height="120"
        />
      </div>
      <Table />
    </div>
  );
};

export default PersonalInfo;
