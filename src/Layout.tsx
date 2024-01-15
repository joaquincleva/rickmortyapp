import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h3 className="main-title">Rick And Morty Project</h3>
      </header>
      <Outlet />
      <footer>
        <p>Made with ❤️ by Joaquín Cleva</p>
      </footer>
    </>
  );
};

export default Layout;
