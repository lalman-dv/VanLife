import { Link } from "react-router-dom";
import bgImg from "/src/assets/bgImg.png";

const About = () => {
  return (
    <div className="mb-10">
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="relative w-137 h-60 overflow-hidden m-auto bg-center rounded text-white flex flex-col justify-center gap-8"
      ></div>
      <div className="flex justify-center">
        <div className="w-125 h-29 bg-white mt-10 px-5">
          <h1 className=" font-bold text-3xl">
            Don't squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="font-medium text-base mt-6">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch.
          </p>
          <p className="font-medium text-base mt-4">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="bg-[#FFCC8D] p-5 mt-7 flex flex-col">
            <h2 className="font-bold text-2xl">
              Your destination is waiting.
              <br />
              Your van is ready.
            </h2>
            <Link
              to="/vans"
              className="w-44 h-12 bg-black text-white rounded-2xl flex justify-center items-center mt-4"
            >
              Explore our vans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
