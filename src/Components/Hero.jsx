import bg from "../assets/bg.png";
const Home = () => {
  return (
    <div
      className={`relative w-137 h-97 overflow-hidden m-auto bg-[url("${bg}")] bg-cover rounded`}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div>
        <div className="relative ml-6 mt-24 rounded w-124 h-64">
          <h1 className="font-extrabold text-4xl text-white">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="font-medium text-[16px] text-white mt-5">
            Add adventure to your life by joining the #vanlife movement. <br />{" "}
            Rent the perfect van to make your perfect road trip.
          </p>
          <button className="w-124 h-12 mt-5 bg-[#FF8C38] text-white text-[16px] font-bold rounded">
            <span>Find your van</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
