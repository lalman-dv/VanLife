import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-[548px] h-[111px] bg-white flex items-center justify-between px-5 m-auto">
      <Link to="/" className="font-black text-[26px] w-36 h-10">
        #VANLIFE
      </Link>
      <section
        className=" w-29 h-6 flex items-center justify-center font-semibold text-[#4D4D4D] gap-5
"
      >
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </section>
    </nav>
  );
};

export default Navbar;
