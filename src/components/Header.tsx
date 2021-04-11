import UtilityBar from "./UtilityBar";
import MainBar from "./MainBar";

const Header = () => (
  <header className="relative z-10 shadow-md">
    <UtilityBar />
    <MainBar />
  </header>
);

export default Header;
