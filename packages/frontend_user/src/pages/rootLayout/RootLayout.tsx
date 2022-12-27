import { NavLink, Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  return (
    <>
      <header>NavBar</header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
export default RootLayout;
