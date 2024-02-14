import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { IoSunnyOutline } from "react-icons/io5";
import MobileNav from "./MobileNav";

const Header = () => {
  const activeClasses = ({ isActive }: isActiveProps) =>
    isActive
      ? `text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 from-10% via-sky-500 via-50% to-emerald-500 to-80% italic`
      : ``;

  return (
    <header className="border-b">
      <nav className="max-w-7xl mx-auto py-3 px-6 xl:px-0">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <div className="max-sm:hidden">
            <input
              type="text"
              placeholder="Search Products..."
              className="bg-slate-100 w-72 py-2 px-4 outline-slate-300 rounded-md"
            />
          </div>
          <div className="flex gap-4 items-center">
            <span>
              <IoSunnyOutline />
            </span>
            <span className="space-x-4 hidden lg:flex">
              <NavLink to="/" className={activeClasses}>
                Home
              </NavLink>
              <NavLink to="/contact" className={activeClasses}>
                Contact
              </NavLink>
              <NavLink to="/products" className={activeClasses}>
                Products
              </NavLink>
              <NavLink to="/cart" className={activeClasses}>
                Cart
              </NavLink>
              <NavLink to="/login" className={activeClasses}>
                Login
              </NavLink>
            </span>

            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
