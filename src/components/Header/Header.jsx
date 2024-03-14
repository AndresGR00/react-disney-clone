import "./Header.css";
import NavButton from "../NavButton";
import FilmsIcon from "../../data/Icons/FilmsIcon";
import HomeIcon from "../../data/Icons/HomeIcon";
import MyList from "../../data/Icons/MyList";
import SearchIcon from "../../data/Icons/SearchIcon";
import SeriesIcon from "../../data/Icons/SeriesIcon";
/* import ChangeThemeButton from "../ChangeThemeButton"; */
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full dark:bg-gray-900 bg-slate-400 p-4">
      <NavLink to="">
        <img
          src="https://res.cloudinary.com/dbinlquvz/image/upload/v1708529917/Proyecto_11/logo_v8mgdf.svg"
          alt="Logo Disney"
          className="w-28 logo"
        />
      </NavLink>
      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink to="">
              <NavButton icon={<HomeIcon />} name={"Home"} />
            </NavLink>
          </li>
          <li>
            <NavLink to="search">
              <NavButton icon={<SearchIcon />} name={"Search"} />
            </NavLink>
          </li>
          <li>
            <NavLink to="my-list">
              <NavButton icon={<MyList />} name={"My List"} />
            </NavLink>
          </li>
          <li>
            <NavLink to="films">
              <NavButton
                displayClass="films-icon"
                icon={<FilmsIcon />}
                name={"Films"}
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="series">
              <NavButton
                displayClass="series-icon"
                icon={<SeriesIcon />}
                name={"Series"}
              />
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <ChangeThemeButton /> */}
    </header>
  );
};

export default Header;
