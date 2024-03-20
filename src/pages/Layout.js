import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Engineering</Link>
          </li>
          <li>
            <Link to="/creative">Creative</Link>
          </li>
          <li>
            <Link to="/engineering">Engineering</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
