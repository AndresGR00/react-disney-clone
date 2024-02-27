import { NavLink } from "react-router-dom";
import NavButton from "../components/NavButton";

const MyList = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 p-6">
      <h2 className="font-semibold text-3xl text-center text-wrap">You have not added anything yet...</h2>
      <NavLink to="/">
        <NavButton name={"Explore Now"} />
      </NavLink>
    </section>
  );
};

export default MyList;
