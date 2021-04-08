import Link from "next/link";
import style from "./header.module.scss";
import Image from "next/image";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <ul className={style.ulContainer}>
          <Link href="/">
            <span className={style.logo}>
              Movie<span className={style.logoUp}>UP</span>
            </span>
          </Link>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link href="/favorites">
              <a className={style.favorites}>Favorites</a>
            </Link>
          </li>
        </ul>
        <div className={style.searchBar}>
          <input className={style.input} placeholder="Enter movie name here" />
          <FontAwesomeIcon className={style.icon} icon={faSearch} />
        </div>
      </div>
    </header>
  );
};

export default Header;
