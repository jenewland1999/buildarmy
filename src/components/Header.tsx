import UtilityBar from "./UtilityBar";
import MainBar from "./MainBar";

const Header = () => (
  <header className="sticky top-0 z-50 shadow-md">
    <UtilityBar />
    <MainBar />
  </header>
);

export default Header;
