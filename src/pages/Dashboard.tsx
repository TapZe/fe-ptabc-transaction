import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="hero bg-base-200 flex-grow rounded-xl">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold">Hello there!</h1>
            <p className="py-6">
              Explore our enterprise transaction platform! Log in to navigate
              our user-friendly interface designed to enhance your productivity.
              Join us now to unlock the full potential of our services!
            </p>
            <Link to={"/transaction"} className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
