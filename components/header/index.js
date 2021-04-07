import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <span>logo</span>
      </Link>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            <a>Favorites</a>
          </Link>
        </li>
      </ul>
      <input placeholder="Enter movie name here" />
    </header>
  );
};

export default Header;
